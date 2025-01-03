// pages/resetcode/resetcode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  phone:'',
  passWord:'',
  passWord1:''
  },
  getPhoneValue:function(e){
    this.setData({
      phone:e.detail.value
    })
  },
  getCodeValue: function (e) {
    this.setData({
      passWord1: e.detail.value
    })
  },
  restCodeValue:function(e){
    this.setData({
      passWord:e.detail.value
    })
  },
  //获取验证码
  reset: function () {
    //var that = this;
   console.log(this.data.phone+this.data.passWord)
   //判断账号密码是否为空，为空弹窗提示
   if (this.data.phone == '' || this.data.passWord == '') {
     wx.showToast({
       title: "用户名密码为空",
       icon: '',
       duration: 2000 //弹出时间
     })
   } else {
     wx.request({
       url: "http://localhost:8080/testBoot/update",
       method: "GET",
       dataType: "json",
       data: {
         phone: this.data.phone,
          passWord: this.data.passWord
       },
       header: {
         'content-type': 'application/json'
       },
       success: function (result) {
         console.log(result)
          if (result.data == "1") {
           console.log("成功")
            wx.switchTab({
              url: '/pages/users/users',
            })
         } else {
          console.log("修改失败")
           wx.showToast({
              title: "修改失败",
              icon: '',
             duration: 2000 //弹出时间
          })
         }
       },
       // //若是请求路径错了，着下面语句就有用了
        fail: function () {
          console.log("修改失败")
        }
     })
   }
 },
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