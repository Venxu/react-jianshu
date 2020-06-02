import {createStore,compose} from 'redux'
import reducer from './reducer'
// 查看数据状态的工具
const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
 const store=createStore(reducer,composeEnhancers())
 export default store