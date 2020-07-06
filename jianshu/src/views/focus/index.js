import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight,BackTop } from './style'
import WriteInfo from './components/WriteInfo'



import { connect } from 'react-redux'
import { actionCreators } from './store'

class WriteHome extends Component {
 
    render() {
        return (
            <div>
                <WriteInfo>
               

                </WriteInfo>
            </div>
            )
    }
   

}

export default connect(null, null)(WriteHome);