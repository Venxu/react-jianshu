import * as actionType from './actionType'
// export const inputFocus=()=>{
//     actionType.searchFocus

// }
// export const inputBlur=()=>{
//      actionType.searchBlur
// }

export const inputFocus=()=>({
  type: actionType.searchFocus

})
export const inputBlur=()=>({
    type: actionType.searchBlur
})