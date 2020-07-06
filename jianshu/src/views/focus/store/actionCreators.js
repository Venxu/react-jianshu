
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


