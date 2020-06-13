
import axios from 'axios'

const changeList=(data)=>({
    // type:'change_list',
    type:actionType.change_list,
    data

})
// 鼠标聚焦时出现下方搜索历史记录

const getList=()=>{
    return (dispatch)=>{
        // console.log("聚焦出现历史记录")
        axios.get('/api/header.json').then(res=>{
            // 创建action，派发给store，store再派发给reducer
            console.log(res)
            // const action={
            //     type:'change_list',
            //     data:res.data
            // }
            dispatch(changeList(res.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }
}