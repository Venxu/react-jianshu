
import axios from 'axios'
import * as actionType from './actionType'
import {fromJS} from 'immutable'

const change_home_data=(result)=>{
    return {
        type: actionType.CHANGE_HOME_DATA,
        RecommendList: result.RecommendList,
        list: result.list,
        topList: result.topList
    
    }       
}
export const getHomeData=(dispatch)=>{
    return (dispatch)=>{
        axios.get('/api/home.json').then(res => {
            let result = res.data
            const action = change_home_data(result)
            dispatch(action)
        })

    }
}

const getMoreList=(result,nextPage)=>{
   
    return{
        type:actionType.GET_HOME_DATA,
        loadMore:fromJS(result.loadMore),
        nextPage

    }
}
export const loadMore=(listPage)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then(res => {   
            let result = res.data
            const action = getMoreList(result,listPage+1)
            // const action={
            //     type:'getMoreList',
            //     moreList:res.data
            // }
            dispatch(action)
        })
    
    }
}

export const changeScrollShow=(show)=>{
 
   return (dispatch)=>{
       const actions={
         type:actionType.CHANGE_SCROLL_VALUE,
           show:fromJS(show)
       }
       dispatch(actions)

   }
      
}