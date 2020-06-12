import {combineReducers} from 'redux'
// import HeadReducer from '../common/Header/store/reducer'
// 将nav和首页的reducer统一放到大的store管理
import {reducer as HeadReducer} from '../common/Header/store'
import {reducer as HomeReducer} from '../views/home/store/index'

const reducers= combineReducers({
    header:HeadReducer,
    Home:HomeReducer
})
// 导入得是常量
export default reducers;