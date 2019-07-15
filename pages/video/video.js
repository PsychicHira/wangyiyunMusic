var api = require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video:[],
    count:2
  },
  //一般方法
  loadMore:function(){
    console.log(123)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取推荐mv
    api.getNewMv({
      limit:10
    }).then(res=>{
      this.setData({
        video:res.data
      })
      
      // console.log(res.data)
    })
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
    console.log(this.data.count)
    api.getNewMv({
      limit:this.data.count*10
    }).then(res=>{
      this.setData({
        video:res.data,
        count:this.data.count+1
      })
      // console.log(res.data)
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})