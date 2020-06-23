import {reducer as headReducer} from '../common/Header/store/reducer'
// state变成immutable格式数据  redux-immutable
import { combineReducers } from 'redux-immutable'
import {reducer as HeadReducer} from '../common/Header/store'
import {reducer as HomeReducer} from '../views/home/store'
import {reducer as DetailReducer} from '../views/detail/store'
import {reducer as LoginReducer} from '../views/login/store'
// export default combineReducers({
//     header:headReducer
// })

const reducer=combineReducers({
    header:HeadReducer,
    home:HomeReducer,
    detail:DetailReducer,
    login:LoginReducer
})
export default reducer