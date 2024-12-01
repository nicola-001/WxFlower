import {
    asyncSetStorage,
    asyncGetStorage,
    asyncRemoveStorage,
    asyncClearStorage
} from './utils/storage'

App({
    async onShow() {
       asyncClearStorage()
    }
})