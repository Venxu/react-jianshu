import * as actionType from './actionType'
import axios from 'axios'
// actionCreators派发行为具体要干什么，返回一个对象，但是使用异步请求redux-thunk后直接返回函数
// focus下action
import {fromJS} from 'immutable'

export const searchFocus=()=>({
        type: actionType.searchFocus
})
export const searchBlur=()=>({
    type: actionType.searchBlur
})

 export const mouseIn=()=>({
     type:actionType.changeMouse
 })

 export const mouseLeave=()=>({
    type:actionType.changeMouseLeave
})
export const changePage=(page)=>({
    type:actionType.changePageList,
    page
})

export const changeList=(data)=>({
    // type:'change_list',
    type:actionType.changeList,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)

})
// 鼠标聚焦时出现下方搜索历史记录
// redux-thunk返回一个函数
export const getList=(dispatch)=>{
    return (dispatch)=>{
        // console.log("jj")
        // dispatch(changeList("res.data.data"))
      
        // // console.log("聚焦出现历史记录")
        axios.get('/api/header.json').then(res=>{
            // 创建action，派发给store，store再派发给reducer
            console.log(res)
            // const action={
            //     type:'change_list',
            //     data:res.data
            // }
            dispatch(changeList(res.data.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

