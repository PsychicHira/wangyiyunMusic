// pages/login/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    redColor: false,
    passWord: '',
    isClick: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '手机号登陆'
    })
  },

  /**
   * 自定义函数
   */
  //改变button颜色
  changeColor: function (e) {
    if (e.detail.value) {
      this.setData({
        redColor: true,
        isClick: false,
        passWord: e.detail.value
      })
    } else {
      this.setData({
        redColor: false,
        isClick: true,
        passWord: e.detail.value
      })
    }
  },
  //下一步跳转
  next: function () {
    if (this.data.passWord.length != 8) {
      wx.showToast({
        title: '请输入8位密码',
        duration: 2000
      })
      return
    }
    wx.setStorage({
      key: 'passWord',
      data: this.data.passWord
    })
    wx.switchTab({
      url: '/pages/index/index',
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