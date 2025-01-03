// pages/fan/index.js
Page({
 
    data: {
     showModal: false

    },
    goto:function(){
        wx.navigateTo({
            url:'/pages/diao/index'
        })
    },
    
    submit: function() {
     this.setData({
     showModal: true
     })
    },
    
    preventTouchMove: function() {
    
    },
    
    
    go: function() { 
     this.setData({
     showModal: false
     })
    }
    
   })