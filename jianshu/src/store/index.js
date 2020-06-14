import {createStore,applyMiddleware } from 'redux'
import reducer from './reducer'
// 创建store的时候使用redux-thunk
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
// 查看数据状态的工具
// const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
 const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
 export default store