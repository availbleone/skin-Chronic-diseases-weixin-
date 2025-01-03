// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  //初始化数据
 data:{
phone:null,
realName:null,
age:null,
passWord:null
 },
// 获取输入框值
setphone: function (e) {
  this.setData({
    phone: e.detail.value
  })
},
setuserName:function (e) {
  this.setData({
    realName:e.detail.value
  }) 
},
setage:function (e) {
  this.setData({
    age:e.detail.value
  }) 
},
setcode:function (e) {
  this.setData({
    passWord:e.detail.value
  }) 
},
//实现数据的跳转
registerdemo:function (e) {
  console.log(this.data.phone+this.data.passWord+this.data.age+this.data.realName)
  //判断账号密码是否为空，为空弹窗提示
  if (this.data.phone == null || this.data.passWord == null||this,this.data.age==null||this.data.realName==null) {
    wx.showToast({
      title: "请输入完整的值",
      icon:"error",
      duration: 2000 //弹出时间
    })
  } else {
    wx.request({
      method: 'POST',//这里要和 server.js 定义的 post or get 一致！！！
      url: 'http://10.211.150.97:3000/regist',//这里的 ip 地址不是数据库的地址，而是你的电脑本地的地址，因为这一步的操作是要找到本地 nodejs 服务器。getUser 要和 server.js 中定义的方法名一致。
      data: {
      name:this.data.realName,
      age:this.data.age,
      phone:this.data.phone,
      passwd:this.data.passWord
        //这里面是传入参数。比如我们要 select * from data where openid= 给定的 openid，就可以从这里传入
      },
      success: function (res) {//成功获取到值，返回一个 res 对象。如果不知道 res 对象里面包含什么，可以先输出 res 对象看一下其中都包含什么
        console.log(res);
        console.log(22222222);
        console.log("成功")
       wx.switchTab({
         url: '/pages/jiare/jiare',
       })
      },
      fail: function () {//没有获取到值，说明这中间出问题了。
        console.log("获取失败");
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