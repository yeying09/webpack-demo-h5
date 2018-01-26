import axios from 'axios'
import router from '@/router'
const qs = require('qs');

function convertBaseURL() {
  console.log(process.env.NODE_ENV);
  if(['production'].indexOf(process.env.NODE_ENV) > -1) {
    return ''
  } else if(['staging'].indexOf(process.env.NODE_ENV) > -1) {
    return ''
  } else if(['development'].indexOf(process.env.NODE_ENV) > -1) {
    return '/api'
  }
}

// 这是
axios.defaults.baseURL = convertBaseURL();

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(function(config) {
  return config;
}, function(error) {
  console.log(error);
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function(response) {
  // 拦截code转中文描述
  if (response.data) {
    switch (response.data.code) {
      case 200: // 成功
        break;
      case 100: // Invalid VCode
        return Promise.reject('验证码错误');
      case 101: // Send Vcode Fail
        return Promise.reject('发送验证码失败');
      case 102: // User Not Exist
        return Promise.reject('用户不存在');
      case 103: // Login Fail
        return Promise.reject('登录失败');
      case 500: // Internal Server Error
        return Promise.reject('正在更新维护中');
      case 501: // Invalid Parameters
        let msg = '系统错误，请联系客服';
        // let desc = response.data.desc;
        return Promise.reject(msg);
      case 502: // Invalid Token
        localStorage.clear();
        if(router.currentRoute.path !== '/login') {
          router.push({ name: 'login' });
          return Promise.reject('登录已过期，请重新登录')
        } else { // 如果当前路由在登录页，不提示错误和跳转
          break;
        }
      default:
        return Promise.reject('正在更新维护中')
    }
  }
  return response ? response.data : {}
}, function(error) {
  console.log(error);
  return Promise.reject('正在更新维护中')
});

// 封装axios的post请求
axios.postRequest = (url, params, config) => {
  // 如果不是登录 或 获取验证码 接口，入参默认加上 phone和token
  if(url !== '/user/login' && url !== '/user/vcode') {
    params.phone = localStorage.getItem('userPhone') || '';
    params.token = localStorage.getItem('userToken') || '';
  }

  return new Promise((resolve, reject) => {
    const dataStr = qs.stringify(params, {
      arrayFormat: 'brackets'
    });

    axios.post(url, dataStr, config)
      .then(response => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
  })
};

axios.getRequest = (url, params) => {
  let querystr = params.params ? params.params : {};

  if(url !== '') { // xx接口不需要phone和token
    querystr.token = localStorage.getItem('userToken') || '';
    querystr.phone = localStorage.getItem('userPhone') || '';
  }

  params.params = querystr;

  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
  })
};

axios.putRequest = (url, params, config) => {
  params.phone = localStorage.getItem('userPhone') || '';
  params.token = localStorage.getItem('userToken') || '';

  if(config && config.headers) {
    if(!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
  } else {
    config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }

  return new Promise((resolve, reject) => {
    const dataStr = qs.stringify(params, {
      arrayFormat: 'brackets'
    });

    axios.put(url, dataStr, config)
      .then(response => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      })
  })
};

export default axios
