import Loadable from 'react-loadable'
import React from 'react'
//通用的过场组件
const LoadableComponent =Loadable({
    loader:()=>import('./index'),//加载指定的组件
    loading(){
        return(
            <div>加载中</div>
        )
    }
})

// 无状态组件定义组件
export default ()=><LoadableComponent></LoadableComponent>