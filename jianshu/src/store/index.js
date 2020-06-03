import {createStore,applyMiddleware } from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
// 查看数据状态的工具
// const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
 const store=createStore(reducer,composeWithDevTools(applyMiddleware()))
 export default store