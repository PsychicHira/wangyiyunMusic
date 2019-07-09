const BASE_URL = "http://192.168.0.2:3000/"
const REQUEST = (requetUrl,data)=>{
    return new Promise((res,rej)=>{
        let url = BASE_URL + requetUrl
        wx.request({
            url:url,
            data:data,
            method:"GET",
            dataType:"json",
            success:(data)=>{
                res(data.data)
            },
            fail:(err)=>{
                rej(err)
            }
        })
    })
}

module.exports = {
    //获取轮播
    banner:(data)=>{
        return REQUEST('banner',data)
    },
    //获取推荐歌单
    personalized:(data)=>{
        return REQUEST('personalized',data)
    },
    //获取推荐mv
    personalizedMv:(data)=>{
        return REQUEST('personalized/mv',data)
    },
    //获取mv的url（需要mv的id）
    getMvUrl:(data)=>{
        return REQUEST('mv/url',data)
    },
    //获取新碟信息
    getNewDisc:(data)=>{
        return REQUEST('top/album',data)
    },
    //获取新歌信息
    getNewSong:(data)=>{
        return REQUEST('top/song',data)
    }
}