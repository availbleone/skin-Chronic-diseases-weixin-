// pages/slow/slow.js
import * as echarts from '../../ec-canvas/echarts.min';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    question:"",
    response:"",
    gender:"",
    genderArray: ['李医生', '汪医生','刘医生','张医生','何医生'],
        genderIndex: 0,
    trend:false,
    medicine:false,
    record:false,
    consult:false,
    ec: {
      onInit: null
    },
    medicines: [
      {
        name:"氯雷他定",description:"抗组胺药物，用于治疗皮肤过敏反应，如荨麻疹和接触性皮炎。",
      dosage:"10mg",usage:"每日口服一次，一般在晚饭后服用",remindertime:"晚饭后"
      },
      {
        name:"甲强龙",description:"属于糖皮质激素类药物，用于治疗严重的皮肤炎症和过敏反应。",
      dosage:"0.1%乳膏",usage:"涂抹于患处，每日2次，早晚各一次",remindertime:"睡前提醒"
      },
      {
        name:"氯化钠洗剂",description:"清洁和保湿皮肤，用于治疗干燥和瘙痒性皮肤病。",
      dosage:"按需使用",usage:"在患处轻轻擦拭或泡洗，每日数次",remindertime:"早上提醒"
      },
      ],
    flareUpDate: '',
    symptomLocation: '',
    severity: '',
    imagePath: '',
    remarks: ''
  },
  initChart:function (canvas, width, height, dpr) {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height,
      devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);
   
    var option = {
      title: {
        text: '',
        left: 'center'
      },
      legend: {
        data: ['皮肤湿度', '皮脂分泌量', '角质层厚度','温度','血压'],
        top: 0,
        left: 'center',
        backgroundColor: 'white'
      },
      grid: {
        containLabel: true
      },
      tooltip: {
        show: true,
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        // show: false
      },
      yAxis: {
        x: 'center',
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
        // show: false
      },
      series: [{
        name: '皮肤湿度',
        type: 'line',
        smooth: true,
        data: [18, 36, 65, 30, 78, 40, 33]
      }, {
        name: '皮脂分泌量',
        type: 'line',
        smooth: true,
        data: [12, 50, 51, 35, 70, 30, 20]
      }, {
        name: '角质层厚度',
        type: 'line',
        smooth: true,
        data: [10, 30, 31, 50, 40, 20, 10]
      },{
        name: '温度',
        type: 'line',
        smooth: true,
        data: [37, 38, 38, 36, 39, 36, 37]
      },{
        name: '血压',
        type: 'line',
        smooth: true,
        data: [10, 20, 15, 12, 11, 16, 18]
      }]
    };
   
    chart.setOption(option);
    return chart;
  },


  chooseImage: function () {
    wx.chooseImage({
      count: 1,
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          imagePath: res.tempFilePaths[0]
        });
      }
    });
  },
  submitRecord: function (e) {
    const recordData = e.detail.value;
    console.log(recordData)
    recordData.imagePath = this.data.imagePath;
    wx.setStorageSync('flareUpDate', recordData.flareUpDate)
    wx.setStorageSync('remarks', recordData.remarks)
    wx.setStorageSync('severity', recordData.severity)
    wx.setStorageSync('symptomLocation', recordData.symptomLocation)
  },
  alerm:function () {
    setTimeout(() => {
      wx.showModal({
        title: '提醒',
        content: '亲，又到一天该吃药的时候了哦',
        complete: (res) => {
          if (res.cancel) {
            
          }
      
          if (res.confirm) {
            
          }
        }
      })
    }, 1000);
  },
  changeGender: function (e) {
    console.log(e)
    var genderIndex = e.detail.value
    if (genderIndex != "null") {
        this.setData({
            genderIndex: genderIndex,
            gender: this.data.genderArray[this.data.genderIndex]
        })
    }
},
submitQuestion:function () {
  this.setData({
    response:"你好，你的问题我已经了解，我会马上为你分析并解决"
  })
},
  btn1:function () {
    if (this.data.trend==false) {
      this.setData({
        trend:true
      })
    }
    else{
      this.setData({
        trend:false
      })
    }
  },
  btn2:function () {
    if (this.data.medicine==false) {
      this.setData({
        medicine:true
      })
    }
    else{
      this.setData({
        medicine:false
      })
    }
  },
  btn3:function () {
    if (this.data.record==false) {
      this.setData({
        record:true
      })
    }
    else{
      this.setData({
        record:false
      })
    }
  },
  btn4:function () {
    if (this.data.consult==false) {
      this.setData({
        consult:true
      })
    }
    else{
      this.setData({
        consult:false
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
    this.setData({
      ec:{
        onInit:this.initChart
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