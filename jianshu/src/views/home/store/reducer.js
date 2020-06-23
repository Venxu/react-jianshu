
// 数据变成不可改变得类型
import { fromJS } from 'immutable'
import { actionType } from './index'
const defaultState = fromJS({
    topList: [],
    list: [],
    RecommendList: [],
    listPage: 1,
    showScroll:false

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
                return state.set('showScroll',action.show)
    
          


    }
    return state

}