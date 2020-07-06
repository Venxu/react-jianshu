
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

// 获取推荐作者列表
export const get_wiriter_data=(result)=>{

    return{
        type:actionType.GET_WRITER_LIST,
        recommendList:fromJS(result)
    }
    

}
export const getWriterList=(dispatch)=>{
    return(dispatch)=>{
        axios.get('/api/recommendList.json').then(res=>{
            let result=res.data.recommendWriterList
            // const action={
            //     type:'get_writer_list',
            //     recommendList:res.data.recommendWriterList
            // }
            dispatch(get_wiriter_data(result))
        }).catch(err=>{
            console.log(err)
        })

    }
}
export const change_isShow=(isShow)=>{
    return {
        type:actionType.CHANGE_SHOW,
        data:isShow
    }
}

// 控制二维码显示大图
export const bigErweima=(isShow)=>{
    return(dispatch)=>{
       
        dispatch(change_isShow(isShow))

    }

}

export const change_trueShow=(trueFalse)=>{
    return {
        type:actionType.CHANGE_TRUE_SHOW,
        data:trueFalse
    }
}

// 控制二维码显示大图
export const bigTrueShow=(trueFalse)=>{
    return(dispatch)=>{
       
        dispatch(change_trueShow(trueFalse))

    }

}