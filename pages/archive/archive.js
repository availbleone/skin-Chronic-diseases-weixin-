// pages/detect/detect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:"",
    weight:"",
    bmi:"",
    temperature:"",
    pressure:"",
    sugar:"",
    rate:"",
    vision:"",
    capacity:"",
    pace:"",
    record:"",
    name:"",
    gender:"",
    wet:"",
    fenmi:"",
    thick:""
  },
  in1:function (e) {
    this.setData({
      weight:e.detail.value
    })
  },
  in2:function (e) {
    this.setData({
      height:e.detail.value
    })
  },
  in3:function (e) {
    this.setData({
      temperature:e.detail.value
    })
  },
  in4:function (e) {
    this.setData({
      pressure:e.detail.value
    })
  },
  in5:function (e) {
    this.setData({
      sugar:e.detail.value
    })
  },
  in6:function (e) {
    this.setData({
      rate:e.detail.value
    })
  },
  in7:function (e) {
    this.setData({
      pace:e.detail.value
    })
  },
  in8:function (e) {
    this.setData({
      vision:e.detail.value
    })
  },
  in9:function (e) {
    this.setData({
      capacity:e.detail.value
    })
  },
  in10:function (e) {
    this.setData({
      record:e.detail.value
    })
  },
  in11:function (e) {
    this.setData({
      name:e.detail.value
    })
  },
  in12:function (e) {
    this.setData({
      gender:e.detail.value
    })
  },
  in13:function (e) {
    this.setData({
      wet:e.detail.value
    })
  },
  in12:function (e) {
    this.setData({
      fenmi:e.detail.value
    })
  },
  in12:function (e) {
    this.setData({
      thick:e.detail.value
    })
  },
submit:function () {
  wx.setStorageSync('name', this.data.name)
  wx.setStorageSync('gender', this.data.gender)
  wx.setStorageSync('bmi', this.data.bmi)
  console.log(this.data.temperature);
  // if (this.data.height!=""&&this.data.weight!=""&&this.data.temperature!=""&&this.data.pressure!=""&&this.data.sugar!=""&&this.data.rate!=""
  // &&this.data.vision!=""&&this.data.capacity!="") {
    wx.request({
      method: 'POST',//这里要和 server.js 定义的 post or get 一致！！！
      url: 'http://10.211.150.97:3000/updatearchive',//这里的 ip 地址不是数据库的地址，而是你的电脑本地的地址，因为这一步的操作是要找到本地 nodejs 服务器。getUser 要和 server.js 中定义的方法名一致。
      
      data: {
      height:this.data.height,
      weight:this.data.weight,
      temperature:parseFloat(this.data.temperature),
      pressure:this.data.pressure,
      sugar:parseFloat(this.data.sugar) ,
      rate:this.data.rate,
      vision:parseFloat(this.data.vision),
      capacity:this.data.capacity,
      gender:this.data.gender,
      name:this.data.name,
      record:this.data.record,
      pace:this.data.pace,
      bmi:this.data.bmi,
      wet:this.data.wet,
      fenmi:this.data.fenmi,
      thick:this.data.thick
        //这里面是传入参数。比如我们要 select * from data where openid= 给定的 openid，就可以从这里传入
      },
      success: function (res) {//成功获取到值，返回一个 res 对象。如果不知道 res 对象里面包含什么，可以先输出 res 对象看一下其中都包含什么
        console.log(res);
        console.log(4444444);
      },
      fail: function () {//没有获取到值，说明这中间出问题了。
        console.log("获取失败");
      }
    })
  

  wx.showToast({
    title: '数据修改成功!',
  })
},
generate:function () {
  if (this.data.height==null||this.data.weight==null) {
    wx.showModal({
      title: '提示',
      content: '请输入体重与身高',
    })
  }
  else{
    this.setData({
      bmi:this.data.height/(this.data.weight*this.data.weight)
    })
  }
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var that=this
    wx.request({
      method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
      url: 'http://10.211.150.97:3000/getUser',//这里的 ip 地址不是数据库的地址，而是你的电脑本地的地址，因为这一步的操作是要找到本地 nodejs 服务器。getUser 要和 server.js 中定义的方法名一致。
      data: {
        //这里面是传入参数。比如我们要 select * from data where openid= 给定的 openid，就可以从这里传入
      },
      success: function (res) {//成功获取到值，返回一个 res 对象。如果不知道 res 对象里面包含什么，可以先输出 res 对象看一下其中都包含什么
        that.setData({
        height:res.data[0].height,
        weight:res.data[0].weight,
        bmi:res.data[0].bmi,
        temperature:res.data[0].temperature,
        pressure:res.data[0].pressure,
        sugar:res.data[0].sugar,
        rate:res.data[0].rate,
        vision:res.data[0].vision,
        capacity:res.data[0].capacity,
        pace:res.data[0].pace,
        record:res.data[0].record,
        name:res.data[0].name,
        gender:res.data[0].gender,
        wet:res.data[0].wet,
        fenmi:res.data[0].fenmi,
        thick:res.data[0].thick
        })
        console.log(res.data[0]);
        console.log(5555555555);
      },
      fail: function () {//没有获取到值，说明这中间出问题了。
        console.log("获取失败");
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})