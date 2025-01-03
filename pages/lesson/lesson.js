// pages/lesson/lesson.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmuList:[
      {text:"非常好视频！",color:"#ff0000",time:1},
      {text:"中医出品，啦啦啦啦~~~~",color:"#ff00ff",time:3}
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  videoContext:null,
  inputValue:'',
  onReady:function(){
    this.videoContext1 = wx.createVideoContext('myVideo1');
    this.videoContext2 = wx.createVideoContext('myVideo2');
    this.videoContext3 = wx.createVideoContext('myVideo3');
    this.videoContext4 = wx.createVideoContext('myVideo4');
  },
  bindInputBlur1:function(e){
    this.inputValue1=e.detail.value
  },
 bindSendDanmu1: function () {
    this.videoContext1.sendDanmu({
      text: this.inputValue1,
      color: "#f90"
    })
  },
  bindInputBlur2:function(e){
    this.inputValue2=e.detail.value
  },
 bindSendDanmu2: function () {
    this.videoContext2.sendDanmu({
      text: this.inputValue2,
      color: "#f90"
    })
  },
  bindInputBlur3:function(e){
    this.inputValue3=e.detail.value
  },
 bindSendDanmu3: function () {
    this.videoContext3.sendDanmu({
      text: this.inputValue3,
      color: "#f90"
    })
  },
  bindInputBlur4:function(e){
    this.inputValue4=e.detail.value
  },
 bindSendDanmu4: function () {
    this.videoContext4.sendDanmu({
      text: this.inputValue4,
      color: "#f90"
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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