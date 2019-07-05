var api = require('../../utils/api.js')
Page({
  data: {
    banner:[],
    personalized:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取轮播图
    api.banner().then(res=>{
      this.setData({
        banner:res.banners
      })
    }).catch(err=>{
      console.log(err)
    })
    //获取推荐歌单
    api.personalized().then(res=>{
      this.setData({
        personalized:res.result.splice(0,6)
      })
      console.log(this.data.personalized)
    }).catch(err=>{
      console.log(err)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})