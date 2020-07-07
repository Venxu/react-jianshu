
// 数据变成不可改变得类型
import { fromJS } from 'immutable'
import { actionType } from './index'
const defaultState = fromJS({
    tabs: ["关注用户11", "粉丝859632"],
    tab: 0,
    userItem: []

})
// reducer导出的是个纯函数:给点固定输入就有输出，参数不可变

export default (state = defaultState, action) => {

    switch (action.type) {
        case actionType.CHANGE_TAB_DATA:
            return state.set('tab', action.tab)
        case actionType.GET_DATA:
           return state.set('userItem', action.userItem)




    }
    return state

}