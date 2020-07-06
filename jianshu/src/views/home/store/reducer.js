
// 数据变成不可改变得类型
import { fromJS } from 'immutable'
import { actionType } from './index'
const defaultState = fromJS({
    topList: [],
    list: [],
    RecommendList: [],
    listPage: 1,
    showScroll: false,
    recommendWriterList: [],//作者推荐列表
    isShow: false

})
// reducer导出的是个纯函数:给点固定输入就有输出，参数不可变

export default (state = defaultState, action) => {

    switch (action.type) {
        case actionType.CHANGE_HOME_DATA:
            return state.merge({
                RecommendList: fromJS(action.RecommendList),
                list: fromJS(action.list),
                topList: fromJS(action.topList)
            })
        case actionType.GET_HOME_DATA:
            return state.merge({
                "list": state.get('list').concat(action.loadMore),
                "listPage": action.nextPage

            })
        case actionType.CHANGE_SCROLL_VALUE:
            return state.set('showScroll', action.show)
        // 获取推荐作者推荐列表
        case actionType.GET_WRITER_LIST:
            return state.set('recommendWriterList', action.recommendList)
        // 获取isShow
        case actionType.CHANGE_SHOW:
            return state.set('isShow', true)
        case actionType.CHANGE_TRUE_SHOW:
            return state.set('isShow', action.data)   


    }
    return state

}