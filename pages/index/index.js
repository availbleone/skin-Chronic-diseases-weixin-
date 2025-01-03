// index.js
// 获取应用实例
const app = getApp()
Page({
    loginbnt: function (e) {
        wx.navigateTo({
            url: '../load/load'
        })
    }
})