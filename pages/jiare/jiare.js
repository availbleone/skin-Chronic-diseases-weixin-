// pages/jiare/jiare.js
var startPoint;
const min = 0; // 最小宽度 单位px
const max = 200; // 最大宽度  单位px
const screenWidth = 360; //屏幕宽度，自己获取
let pieInitData = { //环形饼图默认初始数据
  mW: 0.9 * screenWidth / 2,
  mH: 0.6 * screenWidth / 2,
  r: 0.15 * screenWidth,
  lineW: 0.07 * screenWidth,
  chink: 2 * Math.PI / 180,/* 环形间距 */
  outSpot: 0.067 * screenWidth, //伸出去点的长度
  outLine: 0.1 * screenWidth, //伸出去线的长度
  signR: 0.008 * screenWidth, //点半径
  fontSize: 0.03 * screenWidth, //字体大小
  textSpace: 0.025 * screenWidth, //文字上下与线的间距
  speed: 2 * Math.PI / 30, /* 速度 */
  moneyColorArr: ['#FF7573', '#7a95ff', '#0F8EE9', '#44d7b6', '#62D174', '#f2d510', '#FEBE3D', '#FFBE9B']
};


Page({

  /**
   * 页面的初始数据
   */
  data: {
    plan:false,
    xianshi:false,
    none:false,
    none_riji:false,
    none_lianjie:false,
    link:true,
    link_guanbi:false,
    buttonLeft: 0,
    progress: 0, 
    precent:0 ,
    canvasW:0.9*screenWidth,
    canvasH:0.6*screenWidth,
    timer:'',
    id1:null,
    id2:null,
    id3:null,
    id4:null,
    id5:null,
    id6:null,
    id7:null,
    id8:null
  },
  button_detect:function() {
  wx.navigateTo({
    url: '../detect/detect',
  })  
  },
  button_slow:function() {
    wx.navigateTo({
      url: '../slow/slow',
    })  
  },
  button_recognize:function() {
    wx.navigateTo({
      url: '../recognize/recognize',
    })  
  },
  button_link_2:function () {
    wx.navigateTo({
      url: '../calendar/calendar',
    })
  },
  button_plan:function(){
    wx.navigateTo({
      url: '../plan/plan',
    })
  },
  button_generate:function () {
    wx.showModal({
      title: '提示',
      content: '你的健康饮食习惯十分正常！（ ≧ ∇ ≦ ）',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
  },
  button_zhengChang:function () {
    // document.getElementById("txt").focus  微信小程序中没有dom操作
    if(this.data.xianshi==false){
      this.setData({
        xianshi:true
      })
    }
    else{
      this.setData({
        xianshi:false
      })
    }
  },
  button_yiChang:function () {
      // document.getElementById("txt").focus  微信小程序中没有dom操作
      if(this.data.none==false){
        this.setData({
          none:true
        })
      }else{
        this.setData({
          none:false
        })
      }
      if(this.data.id1==null){
        this.setData({
          id1:false
        })
      }else if(this.data.id1==true){
      this.setData({
        id1:false
      })
    }
  },
  button01:function () {
  // document.getElementById("txt").focus  微信小程序中没有dom操作
    if(this.data.id1==null){
      this.setData({
        id1:true
      })
    }else if(this.data.id1==true){
    this.setData({
      id1:false
    })
    }else if(this.data.id1==false){
      this.setData({
        id1:true
      })
    }
  },
  
     onLoad() {
      let data=[
        { value:'湿疹',ratio:25.57 },
        { value:'痤疮',ratio:19.17 },
        { value:'荨麻疹',ratio:7.52 },
        { value:'银屑病',ratio:7.30 },
        { value:'白癜风',ratio:1.88 },
        { value:'足癣',ratio:2.51 },
        { value:'接触性皮炎',ratio:2.09 }
      ]
      this.drawPie('canvas',data)
    },
    // 环形饼图
    drawPie(canvasId, data) {
      let ctx = wx.createCanvasContext(canvasId);
      ctx.clearRect(0, 0, pieInitData.mW * 2, pieInitData.mH * 2);
      let oldOutY = 0;
      let oldDir = 'right';
      drawRing(); //绘制圆环
      function drawRing() {
        let all = 0;
        for (let i = 0; i < data.length; i++) {
          all += data[i].ratio
        }
        let angleList = transformAngle();
        let angleArr = [];
        let pieIndex = 0;
        let startAngle = 3 / 2 * Math.PI;
        loop(pieIndex)
        function loop(index) {
          let endAngle = startAngle + angleList[index].angle;
          ctx.beginPath();
          let proportion = 0;
          for (let j = 0; j < index; j++) {
            proportion += data[j].ratio;
          };
          let start = 3 / 2 * Math.PI + 2 * Math.PI * proportion / all;
          let end = start;
          pieAnimate(index, end, start);
          angleArr.push({ startAngle: startAngle, angle: angleList[index].angle })
          startAngle = endAngle;
        }
        /**
         * index 第几个圆弧块
         * end 结束的角度
         * start 开始的角度
         */
        function pieAnimate(index, end, start) {
          setTimeout(() => {
            let endLimit = start + 2 * Math.PI * data[index].ratio / all - pieInitData.chink;
            if (end < endLimit) {
              end += pieInitData.speed;
              if (end > endLimit) {
                end = endLimit
              }
              pieAnimate(index, end, start);
            } else {
              if (pieIndex < data.length - 1) {
                pieIndex++;
                loop(pieIndex)
              } else {
                // 当最后一个圆弧
                angleArr.forEach(function (item, i) {
                  drawArcLine(item.startAngle, item.angle, i);//绘制点线
                });
              }
            }
          }, 10)
          ctx.setLineWidth(pieInitData.lineW);
          ctx.setStrokeStyle(pieInitData.moneyColorArr[pieIndex]);
          ctx.arc(pieInitData.mW, pieInitData.mH, pieInitData.r, start, end);
          ctx.stroke();
          ctx.draw(true);
        }
        // 转化弧度
        function transformAngle() {
          let total = 0;
          data.forEach(function (item, i) {
            total += item.ratio;
          });
          data.forEach(function (item, i) {
            var angle = item.ratio / total * Math.PI * 2;
            item.angle = angle;
          });
          return data;
        };
        /**
         * startAngle 圆弧块开始的角度
         * angle 圆弧块扇形的角度
         */
        function drawArcLine(startAngle, angle, index) {
          /*计算点出去的坐标*/
          let edge = pieInitData.r + pieInitData.outSpot;
          let edgeX = Math.cos(startAngle + angle / 2) * edge;
          let edgeY = Math.sin(startAngle + angle / 2) * edge;
          let outX = pieInitData.mW + edgeX;
          let outY = pieInitData.mH + edgeY;
          /*计算线出去的坐标*/
          let edge1 = pieInitData.r + pieInitData.outLine;
          let edgeX1 = Math.cos(startAngle + angle / 2) * edge1;
          let edgeY1 = Math.sin(startAngle + angle / 2) * edge1;
          let outX1 = pieInitData.mW + edgeX1;
          let outY1 = pieInitData.mH + edgeY1;
          ctx.beginPath();
          let dir = 'right';
          if (outX1 > pieInitData.mW) {
            dir = 'right';
          } else {
            dir = 'left';
          }
          ctx.setStrokeStyle(pieInitData.moneyColorArr[index]);
          ctx.setLineWidth(1);
          ctx.setFontSize(pieInitData.fontSize);
          ctx.setTextBaseline('middle');
          if (Math.abs(outY - oldOutY) > 10 || dir != oldDir) { ctx.arc(outX - pieInitData.signR / 2, outY - pieInitData.signR / 2, pieInitData.signR, 0, 2 * Math.PI); }
          ctx.setFillStyle(pieInitData.moneyColorArr[index]);
          ctx.fill();
          ctx.moveTo(outX - pieInitData.signR / 2, outY - pieInitData.signR / 2);
          ctx.lineTo(outX1, outY1);
          /**
           * 优化，
           * 上下距离大于30时，上下显示
           * 上下距离大于10，小于30时，一行显示 3.9%  8000-1w/月 为一行
           * 否则不显示
           */
          if (Math.abs(outY - oldOutY) > 30 || dir != oldDir) {
            oldOutY = outY;
            oldDir = dir;
            if (dir == 'right') {
              /*右*/
              ctx.lineTo(pieInitData.mW * 2, outY1);
              ctx.stroke();
              ctx.setFillStyle('#4a4a4a');
              ctx.setTextAlign('left');
              const rightValueW = ctx.measureText(data[index].value).width;
              const rightRatioW = ctx.measureText(data[index].ratio + '%').width;
              ctx.fillText(data[index].value, pieInitData.mW * 2 - rightValueW, outY1 + pieInitData.textSpace);
              ctx.fillText(data[index].ratio + '%', pieInitData.mW * 2 - rightRatioW, outY1 - pieInitData.textSpace);
            } else {
              /*左*/
              ctx.lineTo(0, outY1);
              ctx.stroke();
              ctx.beginPath();
              ctx.setFillStyle('#4a4a4a');
              ctx.setTextAlign('right');
              const leftValueW = ctx.measureText(data[index].value).width;
              const leftRatioW = ctx.measureText(data[index].ratio + '%').width;
              ctx.fillText(data[index].value, 0 + leftValueW, outY1 + pieInitData.textSpace);
              ctx.fillText(data[index].ratio + '%', 0 + leftRatioW, outY1 - pieInitData.textSpace);
            }
          } else {
            if (Math.abs(outY - oldOutY) >= 10) {
              oldOutY = outY;
              oldDir = dir;
              if (dir == 'right') {
                /*右*/
                const lineOffsetR = ctx.measureText('1000%').width;
                ctx.lineTo(pieInitData.mW * 2 - lineOffsetR, outY1);
                ctx.stroke();
                ctx.setFillStyle('#4a4a4a');
                ctx.setTextAlign('left');
                const rightRatioW = ctx.measureText(data[index].ratio + '% ' + data[index].value + '1000%').width;
                ctx.fillText(data[index].ratio + '% ' + data[index].value, pieInitData.mW * 2 - rightRatioW, outY1 + pieInitData.textSpace);
              } else {
                /*左*/
                const lineOffsetL = ctx.measureText('1000%').width;
                ctx.lineTo(0 + lineOffsetL, outY1);
                ctx.stroke();
                ctx.beginPath();
                ctx.setFillStyle('#4a4a4a');
                ctx.setTextAlign('right');
                const leftRatioW = ctx.measureText(data[index].ratio + '% ' + data[index].value + '1000%').width;
                ctx.fillText(data[index].ratio + '% ' + data[index].value, 0 + leftRatioW, outY1 - pieInitData.textSpace);
              }
            }
          }
          ctx.draw(true);
        }
      }
    },
    buttonStart: function (e) {
      startPoint = e.touches[0]
    },
    moveTo(e) {
      var endPoint = e.touches[e.touches.length - 1]
      var translateX = endPoint.clientX - startPoint.clientX
      startPoint = endPoint;
      var buttonLeft = this.data.buttonLeft + translateX;
      if (buttonLeft > max) {
        // 滑动位置大于进度条最大宽度的时候让它为最大宽度
        buttonLeft = max
      }
      if (buttonLeft < min) {
        // 滑动位置小于进度条最大宽度的时候让它为最小宽度
        buttonLeft = min
      }
      this.setData({
        buttonLeft: buttonLeft,
        progress: buttonLeft,
        precent:parseInt((buttonLeft/max)*100)
      })
    }
})