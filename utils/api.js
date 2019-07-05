const BASE_URL = "http://localhost:3000/"
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
    banner:(data)=>{
        return REQUEST('banner',data)
    },
    personalized:(data)=>{
        return REQUEST('personalized',data)
    }
}