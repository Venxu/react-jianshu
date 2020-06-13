import { combineReducers } from 'redux-immutable'
// import HeadReducer from '../common/Header/store/reducer'
import { reducer as HeadReducer } from '../common/Header/store'

const reducers = combineReducers({
    // 将header下的数据放在heade中
    // header: HeadReducer
})
// 导入得是常量
export default reducers;