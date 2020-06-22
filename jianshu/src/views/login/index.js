import React, { Component } from 'react'
import { LoginWrapper,LoginBox,Input,Button } from './style'
import {connect} from 'react-redux'
import { actionCreators } from '../detail/store'

class Detail extends Component {
    render() {
        return (
         
           <LoginWrapper>
               <LoginBox>
                   <Input placeholder='账号'></Input>
                   <Input placeholder='密码'></Input>
                   <Button>登录</Button>
               </LoginBox>
           </LoginWrapper>
        
        )
    }
    
}

const mapStateProps=(state)=>{
    return {
      
    }
}

const mapDispatch=(dispatch)=>{
    return {
      
    }
}

export default connect(mapStateProps,mapDispatch)(Detail)