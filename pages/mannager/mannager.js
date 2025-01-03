// pages/mannager/mannager.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  // 跳转事件
  gotopage1:function () {
   wx.navigateTo({
   url:"/pages/help/help"
   }) 
  },
  gotopage2:function () {
    wx.navigateTo({
     url:"/pages/suggestion/suggertion",
    })
  },
  gotopage3:function () {
    wx.navigateTo({
      url: '/pages/home/index',
    })
  },
  bindClear:function (){
    wx.clearStorageSync();
    wx.clearStorage();
    wx.switchTab({
      url: '/pages/index/index',
    })
    wx.showToast({
      title: '清除成功',
      icon:"success"
    })
  }
})