import { combineReducers } from 'redux'
// import HeadReducer from '../common/Header/store/reducer'
import { reducer as HeadReducer } from '../common/Header/store'

const reducers = combineReducers({
    header: HeadReducer
})
// 导入得是常量
export default reducers;