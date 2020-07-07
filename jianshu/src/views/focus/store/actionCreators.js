
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


