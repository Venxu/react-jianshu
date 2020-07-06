
// 数据变成不可改变得类型
import { fromJS } from 'immutable'
import { actionType } from './index'
const defaultState = fromJS({
    title:'',
    pic:'',
    content: ''
   
})
// reducer导出的是个纯函数:给点固定输入就有输出，参数不可变

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.GET_DETAIL_DATA:
        return state.merge({
            'title':action.detailList.title,
            'pic':action.detailList.pic,
            'content':action.detailList.content
        })
       
    
    }
    return state

}