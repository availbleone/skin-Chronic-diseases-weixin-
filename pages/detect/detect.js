Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:"",
    weight:"",
    temperature:"",
    pressure:"",
    sugar:"",
    rate:"",
    vision:"",
    capacity:"",
    wet:"",
    fenmi:"",
    thick:""
  },
  bluetooth:function () {
    wx.navigateTo({
      url: '../equipment/enquipment',
    })
  },
btn1:function () {
  this.getdata();
   this.setData({
    height:170
  })
},
getdata:function () {
  wx.showLoading({
    title: '火力获取数据中',
  }),
  setTimeout(function(){
    wx.hideLoading()
  },500)
},
submit:function () {
  wx.showToast({
    title: '数据上传中........',
    duration:1000
  }),
  setTimeout(function(){
    wx.showToast({
      title: '上传成功！',
    })
  },500)
  this.submitdata();
},
submitdata:function () {
  wx.setStorageSync('height', this.data.height)
  wx.setStorageSync('weight', this.data.weight)
  wx.setStorageSync('temperature', this.data.temperature)
  wx.setStorageSync('pressure', this.data.pressure)
  wx.setStorageSync('sugar', this.data.sugar)
  wx.setStorageSync('rate', this.data.rate)
  wx.setStorageSync('vision', this.data.vision)
  wx.setStorageSync('capacity', this.data.capacity)
  wx.setStorageSync('wet', this.data.wet)
  wx.setStorageSync('fenmi', this.data.fenmi)
  wx.setStorageSync('thick', this.data.thick)
if (this.data.height!=""&&this.data.weight!=""&&this.data.temperature!=""&&this.data.pressure!=""&&this.data.sugar!=""&&this.data.rate!=""
&&this.data.vision!=""&&this.data.capacity!="") {
  wx.request({
    method: 'POST',//这里要和 server.js 定义的 post or get 一致！！！
    url: 'http://10.211.150.97:3000/updatedetect',//这里的 ip 地址不是数据库的地址，而是你的电脑本地的地址，因为这一步的操作是要找到本地 nodejs 服务器。getUser 要和 server.js 中定义的方法名一致。
    data: {
    height:this.data.height,
    weight:this.data.weight,
    temperature:this.data.temperature,
    pressure:this.data.pressure,
    sugar:this.data.sugar,
    rate:this.data.rate,
    vision:this.data.vision,
    capacity:this.data.capacity,
    wet:this.data.wet,
    fenmi:this.data.fenmi,
    thick:this.data.thick,
    gender:wx.getStorageSync('gender')
      //这里面是传入参数。比如我们要 select * from data where openid= 给定的 openid，就可以从这里传入
    },
    success: function (res) {//成功获取到值，返回一个 res 对象。如果不知道 res 对象里面包含什么，可以先输出 res 对象看一下其中都包含什么
      console.log(res);
      console.log(22222222);
    },
    fail: function () {//没有获取到值，说明这中间出问题了。
      console.log("获取失败");
    }
  })
}
  
},
btn2:function () {
  this.getdata();
  this.setData({
    weight:60
  })
},
btn3:function () {
  this.getdata();
  this.setData({
    temperature:37
  })
},
btn4:function () {
  this.getdata();
  this.setData({
    pressure:100
  })
},
btn5:function () {
  this.getdata();
  this.setData({
    sugar:5
  })
},
btn6:function () {
  this.getdata();
  this.setData({
    rate:80
  })
},
btn7:function () {
  this.getdata();
  this.setData({
    vision:5.0
  })
},
btn8:function () {
  this.getdata();
  this.setData({
    capacity:4000
  })
},
btn9:function () {
  this.getdata();
  this.setData({
    wet:50
  })
},
btn10:function () {
  this.getdata();
  this.setData({
    fenmi:10
  })
},
btn11:function () {
  this.getdata();
  this.setData({
    thick:5
  })
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