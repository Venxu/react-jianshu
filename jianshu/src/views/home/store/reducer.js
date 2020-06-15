
// 数据变成不可改变得类型
import {fromJS} from 'immutable'
const defaultState=fromJS({
    topList:[{
        id:1,
        title:'热爱生活',
        pic:'//upload-images.jianshu.io/upload_images/2509688-5bd44d55ff3fe90d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1024/format/webp'
    },
    {
        id:2,
        title:'热爱生活',
        pic:'//upload-images.jianshu.io/upload_images/2509688-5bd44d55ff3fe90d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1024/format/webp'
    },
    {
        id:3,
        title:'热爱生活',
        pic:'//upload-images.jianshu.io/upload_images/2509688-5bd44d55ff3fe90d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1024/format/webp'
    }
    ,
    {
        id:4,
        title:'热爱生活',
        pic:'//upload-images.jianshu.io/upload_images/2509688-5bd44d55ff3fe90d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1024/format/webp'
    }
    ,
    {
        id:5,
        title:'热爱生活',
        pic:'//upload-images.jianshu.io/upload_images/2509688-5bd44d55ff3fe90d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1024/format/webp'
    }]
    
})
// reducer导出的是个纯函数:给点固定输入就有输出，参数不可变

export default (state=defaultState,action)=>{
    
    return state

}