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
      console.log(e)
      this.data.mvId.forEach(element=>{
        api.getMvUrl({
          id:element
        }).then(res=>{
          // console.log(res)
        })
      })
      
    }
  },
  attached:function(){
    let arr=[]
    this.data.video.forEach(element => {
      arr.push(element.id)
    })
    this.setData({
      mvId:arr
    })
    console.log(9090)
  },

})
