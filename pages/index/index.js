var api = require('../../utils/api.js')
Page({
  data: {
    banner:[],
    personalized:[],
    personalizedMv:Array,
    mvId:[],
    mvUrl:[]
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
        //推荐歌单只有6个位置，所以截取前6个
        personalized:res.result.splice(0,6)
      })
      // console.log(this.data.personalized)
    }).catch(err=>{
      console.log(err)
    })
    //获取推荐mv（云村精选）
    api.personalizedMv().then(res=>{
      // console.log(res)
      this.setData({
        personalizedMv:res.result.splice(0,6)
      })
      // console.log(this.data.personalizedMv)
      
        //获取mvId
        this.data.personalizedMv.forEach(element => {
          this.data.mvId.push(element.id)
        })
        //console.log(this.data.mvId);  //有了Id
        
    }).then(()=>{
      // 获取mvUrl
        // 遍历id，发送请求，把url存进数组
      let arr=[]
        this.data.mvId.forEach((element,index) => {
          api.getMvUrl({id:element}).then(res=>{
            arr.push(res.data.url)
            this.setData({
              mvUrl:arr
            })
          }).catch(err=>{
            console.log(err)
          })
        })
        // console.log(arr)
    }).catch(err=>{
      console.log(err)
    })
    
    
    // console.log(this.data.personalizedMv)

    //获取mvUrl
    // this.data.personalizedMv.forEach(element => {
    //   this.data.mvId.push(element.id)
    //   // console.log(element);
    // })
    // console.log(this.data.personalizedMv.length)
    
    // api.getMvUrl().then(res=>{
    //   this.setData({
    //   })
    //   // console.log(this.data.personalizedMv)
    // }).catch(err=>{
    //   console.log(err)
    // })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
    // console.log(this.data.personalizedMv[0]);
    
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