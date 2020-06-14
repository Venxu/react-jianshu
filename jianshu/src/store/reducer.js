import {reducer as headReducer} from '../common/Header/store/reducer'
// state变成immutable格式数据  redux-immutable
import { combineReducers } from 'redux-immutable'
import {reducer as HeadReducer} from '../common/Header/store'
// export default combineReducers({
//     header:headReducer
// })

const reducer=combineReducers({
    header:HeadReducer
})
export default reducer