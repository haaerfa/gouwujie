import {request} from './request'
export function getDetail(iid){
    return request(
        {
            url:'/detail',
            params:{
                iid
            }
        }
    )
}
//请求商品推荐数据
export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.nowPrice =itemInfo.nowPrice;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.nowPrice = itemInfo.lowNowPrice;
    }
}

export class ShopInfo {
    constructor(shopInfo) {
      this.logo = shopInfo.shopLogo;
      this.name = shopInfo.name;
      this.fans = shopInfo.cFans;
      this.sells = shopInfo.cSells;
      this.score = shopInfo.score;
      this.goodsCount = shopInfo.cGoods
    }
  }