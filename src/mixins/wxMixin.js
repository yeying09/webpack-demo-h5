import wxApi from '@/api/wx'

module.exports = {
  data() {
    return {}
  },
  methods: {
    /**
     * 获取微信签名等参数
     * */
    getSign(phone, token) {
      const url = window.location.origin + window.location.pathname + window.location.search
      if (!phone || !token) {
        return;
      }
      else {
        wxApi.getSignServer({ params: { url: url } }).then((signRes) => {
          if (signRes.data) {
            const { nonceStr, timestamp, signature } = JSON.parse(signRes.data)
            const configData = {
              debug: false,
              appId: '',
              timestamp,
              nonceStr,
              signature,
              jsApiList: [
                'onMenuShareTimeline', // 分享到朋友圈
                'onMenuShareAppMessage', // 分享给朋友
                'onMenuShareQQ', // 分享到QQ
                'onMenuShareQZone' // 分享到QQ空间
              ]
            }
            wx.config(configData);
            this.configShareInfo();
          }
        }).catch((e) => {
          // 提示
        })
      }
    },
    /**
     * 配置分享信息
     * */
    configShareInfo() {
      const tSign = localStorage.getItem('userSign') || '';
      let tUrl = window.location.origin + window.location.pathname + '?#/groupLogin';
      if(tSign) {
        tUrl += '?source=' + tSign
      }

      const shareData = {
        title: '',
        desc: '',
        img: '',
        url: tUrl
      };

      wx.ready(function () {
        // 分享到朋友圈
        wx.onMenuShareTimeline({
          title: shareData.title,
          desc: shareData.desc,
          link: shareData.url,
          imgUrl: shareData.img,
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        });
        // 分享给朋友
        wx.onMenuShareAppMessage({
          title: shareData.title,
          desc: shareData.desc,
          link: shareData.url,
          imgUrl: shareData.img,
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        });
        // 分享到QQ
        wx.onMenuShareQQ({
          title: shareData.title, // 分享标题
          desc: shareData.desc, // 分享描述
          link: shareData.url, // 分享链接
          imgUrl: shareData.img, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        });
        // 分享到QQ空间
        wx.onMenuShareQZone({
          title: shareData.title, // 分享标题
          desc: shareData.desc, // 分享描述
          link: shareData.url, // 分享链接
          imgUrl: shareData.img, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        });
      });
    }
  }
}
