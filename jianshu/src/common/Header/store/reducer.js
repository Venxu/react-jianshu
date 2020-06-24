// import {actionType} from './inactionType'
import * as actionType from './actionType'
// 数据变成不可改变得类型
import {fromJS} from 'immutable'
const defaultState=fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
   
   
})
// reducer导出的是个纯函数:给点固定输入就有输出，参数不可变

export default (state=defaultState,action)=>{
    // console.log(actionType.changeList)
    if(action.type===actionType.searchFocus){
        // set方法会结合之前的immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused',true)
    }
    if(action.type===actionType.searchBlur){
        console.log(state.focused)
        return state.set('focused',false)
    }
    if(action.type===actionType.changeList){
        return state.set('list',action.data).set('totalPage',action.totalPage)
        
    }
    if(action.type===actionType.changeMouse){
        return state.set('mouseIn',true)
        
    }
    if(action.type===actionType.changeMouseLeave){
        return state.set('mouseIn',false)
        
    }
    if(action.type===actionType.changePageList){
        return state.set('page',action.page)
        
    }
   
    return state

}