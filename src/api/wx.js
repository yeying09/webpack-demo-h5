import axios from './axios'

export default {
  // 获取微信签名
  getSignServer(data) {
    return axios.getRequest('/wx/signature', data)
  }
}
