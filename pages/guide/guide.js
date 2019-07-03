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
      wx.switchTab({
        url: '/pages/index/index'
      })
      clearInterval(tm)
    },100)
    
  },
  onUnload:function(){

  }

})
