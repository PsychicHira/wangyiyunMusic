var api = require('../../utils/api.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    video:{
      type:Array,
      value:'default value'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    getMvUrl:function(e){
      //获取触发播放事件的视频是mvId里面的第几个，得到mv的ID
      let id = this.data.mvId[e.target.dataset.index]
      //获取mv的地址
        api.getMvUrl({
          id:id
        }).then(res=>{
          //把整个视频数组取出来
          let obj = this.data.video
          //给当前这个mv对象增加url
          obj[e.target.dataset.index].url = res.data.url
          //把video对象重新覆盖，达到双向绑定的目的，让页面可以播放视频
          this.setData({
            video : obj
          })
        })
      
    }
  },
  ready:function(){
    let arr=[]
    this.data.video.forEach(element => {
      arr.push(element.id)
    })
    this.setData({
      mvId:arr
    })
    // console.log(this.data.mvId)
  },

})
