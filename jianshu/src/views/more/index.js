import React, { Component } from 'react'
import { LoginWrapper,LoginBox,Input,Button } from './style'
import {connect} from 'react-redux'
import { actionCreators } from '../login/store'
import { Redirect } from 'react-router-dom'

class LookMore extends Component {
    render() {
        return(
            <div>查看更多界面</div>
        )
       
    }
    
}

// const mapStateProps=(state)=>{
//     return {
//     //   isLogin:state.get('login').get('isLogin')
//     }
// }

// const mapDispatch=(dispatch)=>{
//     return {
//         getLogin(accountValue,passwordValue){
//           dispatch(actionCreators.login(accountValue.value,passwordValue.value))

//         }
      
//     }
// }

export default connect(null,null)(LookMore)