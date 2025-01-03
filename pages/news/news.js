// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:null
  },
bindViewTap:function () {
  var that=this;
  wx.chooseImage({
    count: 6,
    sizeType:['original','compressed'],
    sourceType:['album','camera'],
    success:function (res) {
      var tempFilePaths=res.tempFilePaths;
      that.setData({
        avatarUrl:tempFilePaths
      })
    },
    fail:function (res) {  
    },
    complete:function (res) {
    }
  })
}
})