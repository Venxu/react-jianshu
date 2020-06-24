import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends Component {
    render() {
        if(this.props.isLogin){
            return (
              <div>这是写文章界面</div>
             
             )

        }else{
            return(
                <Redirect to={'/login'}/>
            )
        }
       
    }
    
}

const mapStateProps=(state)=>{
    return {
      isLogin:state.get('login').get('isLogin')
    }
}


export default connect(mapStateProps,null)(Write)