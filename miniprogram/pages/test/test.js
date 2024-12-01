import instance from '../../utils/http'
import {
    reqSwiperData
} from '../../api/index'
Page({
    data: {
        avatar: '../../assets/Jerry.png'
    },
    async handler() {
        console.log(123);
        const res = await reqSwiperData()

        console.log(res)
        // const res = await instance.get("/index/findBanner")
        // console.log(res);


    },
    async allHandler() {
        const res = await instance.all(
            instance.get('/index/findBanner'),
            instance.get('/index/findCategory1')
        )
        console.log(res);
    },
    async chooseavatar(event) {
        const {
            avatarUrl
        } = event.detail
        const res = await instance.upload('/fileUpload', avatarUrl, 'file')
        this.setData({
            avatar: res.data
        })
    }
})