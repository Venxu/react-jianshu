
// 数据变成不可改变得类型
import { fromJS } from 'immutable'
import { actionType } from './index'
const defaultState = fromJS({
    tabs: ["关注用户11", "粉丝859632"],
    tab: 0,
    userItem: [],
    titleTabs: ["文章", "动态", "最新评论", "热门"],
    titleTab: 0,
    tabData:[]

})
// reducer导出的是个纯函数:给点固定输入就有输出，参数不可变

export default (state = defaultState, action) => {

    switch (action.type) {
        case actionType.CHANGE_TAB_DATA:
            return state.set('tab', action.tab)
        case actionType.GET_DATA:
            return state.set('userItem', action.userItem)

        case actionType.CHANGE_TITLE_Tabs:
            return state.set('titleTab', action.titleTab)
        case actionType.GET_TAB_DATA:
            return state.set('tabData', action.tabData)




    }
    return state

}