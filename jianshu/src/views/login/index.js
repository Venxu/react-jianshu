import React, { Component } from 'react'
import { LoginWrapper,LoginBox,Input,Button } from './style'
import {connect} from 'react-redux'
import { actionCreators } from '../login/store'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    render() {
        if(!this.props.isLogin){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input)=>{this.account=input}}></Input>
                        <Input placeholder='密码' type='password' ref={(input)=>{this.password=input}}></Input>
                        <Button onClick={()=>{this.props.getLogin(this.account,this.password)}}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
             
             )

        }else{
            return(
                <Redirect to={'/'}/>
            )
        }
       
    }
    
}

const mapStateProps=(state)=>{
    return {
      isLogin:state.get('login').get('isLogin')
    }
}

const mapDispatch=(dispatch)=>{
    return {
        getLogin(accountValue,passwordValue){
          dispatch(actionCreators.login(accountValue.value,passwordValue.value))

        }
      
    }
}

export default connect(mapStateProps,mapDispatch)(Login)