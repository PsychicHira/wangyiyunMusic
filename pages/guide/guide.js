//index.js
//获取应用实例
const app = getApp()

Page({
  data:{

  },
  onLoad:function(){

  },
  onReady:function(){
    let tm = setInterval(()=>{
      wx.navigateTo({
        url: '/pages/login/login'
      })
      clearInterval(tm)
    },2000)
  },
  onUnload:function(){

  }

})
