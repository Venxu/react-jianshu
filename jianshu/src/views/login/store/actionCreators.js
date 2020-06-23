
import axios from 'axios'
import * as actionType from './actionType'
import {fromJS} from 'immutable'

const change_login=(result)=>{
    return {
        type: actionType.CHANGE_LOGIN,
        value:true
    
    }       
}
export const login=(account,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+account+'&password='+password).then(res => {
            let result = res.data
            const action = change_login(result)
            dispatch(action)
        })

    }
}
