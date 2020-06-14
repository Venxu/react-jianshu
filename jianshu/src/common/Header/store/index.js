// 因为header中reducer引入的时候路径比较长，所以创建index文件，这样直接引入index文件即可
import reducer from './reducer'
import * as actionCreators from './actionCreators'
import * as actionType from './actionType'

// 导出的是变量
export {reducer,actionCreators,actionType}


