// pages/users/users.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginOk: false,
    nickName: "",
    avatarUrl: "",
  },
  //小程序声明周期的可见性函数里面来控制显示
  onShow: function () {
    let userInfo = wx.getStorageSync('userInfo')
    console.log("我的缓存信息", userInfo);
    if (userInfo) {
        this.setData({
            loginOk: true,
            nickName: userInfo.nickName, //从缓存中拿数据
            avatarUrl: userInfo.avatarUrl
        })
    } else {
        this.setData({
            loginOk: false
        })
    }
},

  //点击登录
  load() {
    wx.navigateTo({
        url: '/pages/load/load',
    })
},
//退出登录
exit() {
  if (this.data.loginOk == false) {
      wx.showToast({
          title: '未登录',
          icon: "error",
      })
  } else if (this.data.loginOk == true) {
      wx.showModal({
          content: "确定退出吗"
      }).then(res => {
          if (res.confirm) {
              console.log("用户点击了确定");
              this.setData({
                  loginOk: false
              })
              //清空登录的缓存
              wx.setStorageSync('userInfo', null)
          } else if (res.cancel) {
              console.log("用户点击了取消");
          }
      })
  }
},
    exit:function(e){
      wx.showModal({
        title: '提示',
        content: '是否确认退出',
        success: function (res) {
          if (res.confirm) {
            // console.log('用户点击确定')
            // wx.removeStorageSync('users');
            wx.clearStorageSync();
            //页面跳转
            wx.navigateTo({
              url: '/pages/login/login',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    change: function () {
      wx.navigateTo({
          url: "/pages/resercoded/resercoded"
      })
  },

    gotoPage1: function(){ 
      wx.navigateTo
      ({ 
        url: '/pages/information/information', 
      }) },
      gotoPage2: function(){ 
        wx.navigateTo
        ({ 
          url: '/pages/mannager/mannager', 
        }) },
      gotoPage3: function(){ 
          wx.navigateTo
          ({ 
            url: '/pages/resetcode/resetcode', 
          }) },
          gotoPage4: function(){ 
            wx.navigateTo
            ({ 
              url: '/pages/archive/archive', 
            }) },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
  
})