// pages/change_personal/change_personal.js
var util = require('../../util/util')
Page({
    /**
     * 页面的初始数据
     */
    data: {
        photo:"",
        loginOk: true,
        nickName: "",
        avatarUrl: "",

        name: '',
        gender: 0,
        genderArray: ['男', '女'],
        genderIndex: 0,
        age: 0,
        birthday: '',
        constellation: '',
        constellationArray: ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'],
        constellationIndex: 0,
        tel: '',
        email: '',
        intro: '',
        birthdayEndDate: ''
    },
    onLoad: function (options) {

        var birthdayEndDate = util.getDate()
        var that = this
        wx.request({
            method: 'GET',//这里要和 server.js 定义的 post or get 一致！！！
            url: 'http://10.211.150.97:3000/info',//这里的 ip 地址不是数据库的地址，而是你的电脑本地的地址，因为这一步的操作是要找到本地 nodejs 服务器。getUser 要和 server.js 中定义的方法名一致。
            data: {
              //这里面是传入参数。比如我们要 select * from data where openid= 给定的 openid，就可以从这里传入
            },
            success: function (res) {//成功获取到值，返回一个 res 对象。如果不知道 res 对象里面包含什么，可以先输出 res 对象看一下其中都包含什么
              that.setData({
                  name:res.data[0].name,
                  age:res.data[0].age,
                  tel:res.data[0].phone
              })
                console.log(res);
              console.log(22222222);
            },
            fail: function () {//没有获取到值，说明这中间出问题了。
              console.log("获取失败");
            }
          })
        wx.getStorage({
            key: 'person_info',
            success: function (res) {
                var data = res.data
                that.setData({
                    name: data.name,
                    nickName: data.nickName,
                    gender: data.gender,
                    age: data.age,
                    birthday: data.birthday,
                    constellation: data.constellation,
                    tel: data.tel,
                    email: data.email,
                    intro: data.intro,
                    birthdayEndDate: birthdayEndDate
                })
            }
        })

       
        let userInfo = wx.getStorageSync('userInfo')
        console.log("修改界面缓存信息", userInfo);
        if (userInfo) {
            this.setData({
                loginOk: true,
                nickName: userInfo.nickName, //从缓存中拿数据
                avatarUrl: userInfo.avatarUrl
            })
        } else {
            this.setData({
                loginOk: false
            })
        }
    },

    changephoto: function () {
        wx.chooseImage({ //从本地相册选择图片或使用相机拍照
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: (res) => {
                //这里res中会有一个tempFilePaths,在微信小程序中暂时能用，不能一直使用
              this.data.photo = res.tempFilePaths
                    this.setData({
                        avatarUrl: this.data.photo[0],
                    })
            }
        })
    },

    savePersonInfo: function (e) {
        var data = e.detail.value
        console.log(data);
        if(this.data.photo!=""){
            wx.setStorage({
                key:'userInfo',
                data:{
                    nickName:data.nickName,
                    avatarUrl:this.data.photo[0],
                }
            })
        }
        
        wx.setStorage({
            key: 'person_info',
            data: {
                name: data.name,
                nickName: data.nickName,
                gender: data.gender,
                age: data.age,
                birthday: data.birthday,
                constellation: data.constellation,
                tel: data.tel,
                email: data.email,
                intro: data.intro
            },
            success: function (res) {
                wx.showToast({
                    title: '资料修改成功',
                    icon: 'success',
                    duration: 2000
                })
                setTimeout(function () {
                    wx.redirectTo({
                        url: '../center_personalData/center_personalData'
                    })
                }, 2000)
            }
        })
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
    changeBirthday: function (e) {
        var birthday = e.detail.value
        if (birthday != "null") {
            this.setData({
                birthday: birthday
            })
        }
    },
    changeConstellation: function (e) {
        var constellationIndex = e.detail.value
        if (constellationIndex != "null") {
            this.setData({
                constellationIndex: constellationIndex,
                constellation: this.data.constellationArray[this.data.constellationIndex]
            })
        }
    }
})