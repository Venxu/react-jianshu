import actionCreators from './actionCreators'
import {fromJS} from 'immutable'
const defaultState = {
    focused: false,
    list: []
}

<<<<<<< .mine
const defaultState=fromJS({focused:false})


export default(state=defaultState,action)=>{
    if(action.type===actionType.searchFocus){







=======
export default (state = defaultState, action) => {
    // switch (action.type) {
    //     case 'change_input':
    //         focused = true
    //         break;
    //     case 'search_input':
    //         focused = false
    //         break;
    //     // return {focused:true}
    // }

    if (action.type === 'change_input') {
>>>>>>> .theirs
        // const focused=JSON.parse(JSON.stringify(state))
<<<<<<< .mine
        // return{
        //     focused:true
           
=======
        return {
            focused: true

>>>>>>> .theirs
        // }

        return state.set('focused',true)

    }
<<<<<<< .mine
    if(action.type===actionType.searchBlur){
=======
    if (action.type === 'search_input') {
>>>>>>> .theirs
        // const  focused=JSON.parse(JSON.stringify(state))
<<<<<<< .mine
        // return {
        //     focused:false
        // }
        return state.set('focused',false)
=======
        return {
            focused: false
        }

>>>>>>> .theirs

    }
    return state


}