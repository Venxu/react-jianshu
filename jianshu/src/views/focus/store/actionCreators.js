
import axios from 'axios'
import * as actionType from './actionType'
import {fromJS} from 'immutable'

const change_tab_data=(index)=>{
  
    return {
        type: actionType.CHANGE_TAB_DATA,
        tab:index
    
    }       
}
export const changeTab=(index)=>{
   
    return (dispatch)=>{
        
            const action = change_tab_data(index)
            dispatch(action)
     

    }
}

const get_data=(result)=>{
  
    return {
        type: actionType.GET_DATA,
        userItem:fromJS(result)
    
    
    }       
}

export const getData=()=>{
   
    return (dispatch)=>{
        axios.get('/api/tabList.json').then(res=>{
            let result=res.data.userItem
            console.log(result)
            dispatch(get_data(result))
        }).catch(err=>{
            console.log(err)
        })
        
           
     

    }
}
// 文章tabs
const change_title_tabs=(index)=>{
  
    return {
        type: actionType.CHANGE_TITLE_Tabs,
        titleTab:index
    
    }       
}

export const changeTitleTabs=(index)=>{
   
    return (dispatch)=>{
        
            const action = change_title_tabs(index)
            dispatch(action)
     

    }
}


const get_tab_data=(result)=>{
  
    return {
        type: actionType.GET_TAB_DATA,
        tabData:fromJS(result)
    
    
    }       
}

// 获取文章列表数据
export const getTabData=()=>{
   
    return (dispatch)=>{
        axios.get('/api/titleList.json').then(res=>{
            let result=res.data.tabData
            console.log(result)
            dispatch(get_tab_data(result))
        }).catch(err=>{
            console.log(err)
        })
        
           
     

    }
}



