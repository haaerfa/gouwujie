import {request} from './request'

export function getHomeMultiData(){
    return request({
        // 获取轮播图和推荐模块的数据
        url:'/home/multidata'
    })
}
export function getHomeData(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}