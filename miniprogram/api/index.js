import http from '../utils/http'

// 获取首页轮播图数据
export const reqSwiperData = () => {
  return  http.get('/index/findBanner')
}