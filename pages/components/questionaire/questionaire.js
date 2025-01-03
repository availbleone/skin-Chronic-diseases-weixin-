// pages/components/questionaire/questionaire.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
  },
  data:{
     yxscore:0,
  },
  methods: {
    bandleChange:function (e) {
      const newValue = parseInt(e.detail.value);
      console.log(newValue)
      this.setData({
         yxscore:newValue,
      })
      this.triggerEvent('dataUpdated', { data: this.data.yxscore})
    },
  }
})