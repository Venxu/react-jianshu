import { combineReducers } from 'redux-immutable'
// import HeadReducer from '../common/Header/store/reducer'
<<<<<<< .mine
import { reducer as HeadReducer } from '../common/Header/store'

=======
// 将nav和首页的reducer统一放到大的store管理
import {reducer as HeadReducer} from '../common/Header/store'
>>>>>>> .theirs
import {reducer as HomeReducer} from '../views/home/store/index'

<<<<<<< .mine
const reducers = combineReducers({
    // 将header下的数据放在heade中
=======
const reducers= combineReducers({
    header:HeadReducer,
>>>>>>> .theirs
    Home:HomeReducer
})
// 导入得是常量
export default reducers;