// pages/load/load.js
Page({
  //微信授权登录
  loadByWechat() {
      wx.getUserProfile({
              desc: '用户完善会员资料',
          })
          .then(res => {
              console.log("用户允许了微信授权登录", res.userInfo);
              //注意：此时不能使用 wx.switchTab，不支持参数传递
              wx.reLaunch({
                  //将微信头像和微信名称传递给【我的】页面
                  url: '/pages/center/center?nickName=' + res.userInfo.nickName + '&avatarUrl=' + res.userInfo.avatarUrl,
              })
              //保存用户登录信息到缓存
              wx.setStorageSync('userInfo', res.userInfo);

              setTimeout(function () {
                  wx.switchTab({
                      url: '/pages/home/home',
                  })
              }, 1000)
          })
          .catch(err => {
              console.log("用户拒绝了微信授权登录", err);
          })
  },


  //跳转到账号密码登录页
  loadByAccount() {
      wx.navigateTo({
          url: '/pages/login/login',
      })
  },
  //跳转到注册页
  sign() {
      wx.navigateTo({
          url: '/pages/register/register',
      })
  },

})