// pages/recognize/recognize.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    image:"",
    choose:false,
    result1:"",
    score1:0,
    transform1:0,
    score2:0,
    transform2:0,
    score3:0,
    transform3:0,
    score4:0,
    transform4:0,
    score5:0,
    transform5:0,
    score6:0,
    transform6:0,
    score7:0,
    transform7:0,
    score8:0,
    transform8:0,
    score9:0,
    transform9:0
  },
  handleDataUpdated(e) {
    let data=e.detail.data;
    var s=parseInt(this.data.score1)+data
    var t=parseInt(((s-7)/28)*100)
    console.log(s)
    this.setData({
      score1:s,
      transform1:t
    });
  },
  handleDataUpdated2(e) {
    let data=e.detail.data;
    var s=parseInt(this.data.score2)+data
    var t=parseInt(((s-8)/32)*100)
    console.log(s)
    this.setData({
      score2:s,
      transform2:t
    });
  },
  handleDataUpdated3(e) {
    let data=e.detail.data;
    var s=parseInt(this.data.score3)+data
    var t=parseInt(((s-8)/32)*100)
    console.log(s)
    this.setData({
      score3:s,
      transform3:t
    });
  },
  handleDataUpdated4(e) {
    let data=e.detail.data;
    var s=parseInt(this.data.score4)+data
    var t=parseInt(((s-8)/32)*100)
    console.log(s)
    this.setData({
      score4:s,
      transform4:t
    });
  },
  handleDataUpdated5(e) {
    let data=e.detail.data;
    var s=parseInt(this.data.score5)+data
    var t=parseInt(((s-4)/16)*100)
    console.log(s)
    this.setData({
      score5:s,
      transform5:t
    });
  },
  handleDataUpdated6(e) {
    let data=e.detail.data;
    var s=parseInt(this.data.score6)+data
    var t=parseInt(((s-7)/28)*100)
    console.log(s)
    this.setData({
      score6:s,
      transform6:t
    });
  },
  handleDataUpdated7(e) {
    let data=e.detail.data;
    var s=parseInt(this.data.score7)+data
    var t=parseInt(((s-7)/28)*100)
    this.setData({
      score7:s,
      transform7:t
    });
  },
  handleDataUpdated8(e) {
    let data=e.detail.data;
    var s=parseInt(this.data.score8)+data
    var t=parseInt(((s-7)/28)*100)
    this.setData({
      score8:s,
      transform8:t
    });
  },
  handleDataUpdated9(e) {
    let data=e.detail.data;
    var s=parseInt(this.data.score9)+data
    var t=parseInt(((s-8)/32)*100)
    this.setData({
      score9:s,
      transform9:t
    });
  },
  choose:function () {
    wx.chooseImage({
      count: 1,  // 用户可以选择的图片数量
      success: (res) => {
        const tempFilePaths = res.tempFilePaths;
        console.log('选择的图片:', tempFilePaths);
        // 将选择的图片路径设置到 data 中
        this.setData({
          image: tempFilePaths[0],
          choose:true
        });
      },
      fail: (err) => {
        console.error('选择图片失败:', err);
      }
    });
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