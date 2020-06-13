import {actionType}  from './index'
import {fromJS} from 'immutable'

const defaultState=fromJS({focused:false})


export default(state=defaultState,action)=>{
    if(action.type===actionType.searchFocus){
        // const focused=JSON.parse(JSON.stringify(state))
        // return{
        //     focused:true
           
        // }

        return state.set('focused',true)
      
    }
    if(action.type===actionType.searchBlur){
        // const  focused=JSON.parse(JSON.stringify(state))
        // return {
        //     focused:false
        // }
        return state.set('focused',false)
    
    }
    return state
   

}