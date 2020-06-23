
// 数据变成不可改变得类型
import { fromJS } from 'immutable'
import { actionType } from './index'
const defaultState = fromJS({
    isLogin:false
})
// reducer导出的是个纯函数:给点固定输入就有输出，参数不可变

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.CHANGE_LOGIN:
            return state.set('isLogin',action.value)

    }
    return state

}