const defaultState={
    focused:false,
    list:[]
}

export default(state=defaultState,action)=>{
   
    if(action.type==='change_input'){
        // const focused=JSON.parse(JSON.stringify(state))
        return{
            focused:true
           
        }
      
    }
    if(action.type==='search_input'){
        // const  focused=JSON.parse(JSON.stringify(state))
        return {
            focused:false
        }
    
    }
    return state
   

}