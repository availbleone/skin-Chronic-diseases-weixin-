// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     //判断小程序的API，回调，参数，组件等是否在当前版本可用。
     canIUse: wx.canIUse('button.open-type.getUserInfo'),
      phone: null,//账号
      passWord: null,//密码
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
        isHide: false,
        btn_disabled:true
  },
  //跳转注册
  bindAgreeChange:function(e) {
    //  console.log(e.detail.value)
      this.setData({
        isAgree:e.detail.value.length,
      })
      if (e.detail.value.length==1){
       this.setData({
         btn_disabled:false,
       })
     }else{
        //onsole.log(e.detail.value.length)
       this.setData({
         btn_disabled:true
       })
     }
    },
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  gotopage1:function () {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  //实现登录
  mobileInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  // 获取输入的密码 
  passwordInput: function (e) {
    this.setData({
      passWord: e.detail.value
    })
  }, // 登录
  login: function () {
     //var that = this;
    console.log(this.data.phone+this.data.passWord)
    //判断账号密码是否为空，为空弹窗提示
    if (this.data.phone == null || this.data.passWord == null) {
      wx.showToast({
        title: "用户名密码为空",
        icon: 'error',
        duration: 2000 //弹出时间
      })
    } else {
           if (this.data.phone == "lj" && this.data.passWord == 123) {
            console.log("成功")
             wx.switchTab({
               url: '/pages/jiare/jiare',
             })
          } else {
           console.log("用户名或密码错误")
            wx.showToast({
               title: "用户名或密码错误",
               icon: 'error',
              duration: 2000 //弹出时间
           })
          }
        }
  },
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
gotomianze:function () {
  wx.navigateTo({
    url: '/pages/mianze/mianze',
  })
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

  },
  onLoad: function() {
    var that = this;
    // 查看是否授权
    wx.getSetting({
        success: function(res) {
            if (res.authSetting['scope.userInfo']) {
                wx.getUserInfo({
                    success: function(res) {
                        wx.login({
                            success: res => {
                                console.log("用户的code:" + res.code);
                            }    
                        });
                    }
                });
            } else {
                that.setData({
                    isHide: true
                });
            }
        }
    });
},

bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
        //用户按了允许授权按钮
        var that = this;
        // 获取到用户的信息了，打印到控制台上看下
        console.log("用户的信息如下：");
        console.log(e.detail.userInfo);
        //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
        that.setData({
            isHide: false
        });
    } else {
        //用户按了拒绝按钮
        wx.showModal({
            title: '警告',
            content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
            showCancel: false,
            confirmText: '返回授权',
            success: function(res) {
                // 用户没有授权成功，不需要改变 isHide 的值
                if (res.confirm) {
                    console.log('用户点击了“返回授权”');
                }
            }
        });
    }
}
    })