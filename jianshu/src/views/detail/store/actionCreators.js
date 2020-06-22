
import axios from 'axios'
import * as actionType from './actionType'
import {fromJS} from 'immutable'


const get_detail_data=(result)=>{
   
    return {
        type: actionType.GET_DETAIL_DATA,
        detailList: result.data,
        
    
    }       
}
export const getDetailList=(id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id).then(res => {
            let result = res.data
            const action = get_detail_data(result)
            dispatch(action)
        })

    }
}

