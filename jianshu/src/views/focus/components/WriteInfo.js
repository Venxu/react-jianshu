import React, { Component } from 'react'
import { WriterWrapper, WriterLeft, WriterRight } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import TopInfo from './TopInfo'



class WriteInfo extends Component {
    render() {


        return (
            <WriterWrapper>
                <WriterLeft> 
                    <TopInfo>
                    
                    </TopInfo></WriterLeft>
                <WriterRight>right</WriterRight>

            </WriterWrapper>
        )
    }
}

// const mapStateToProps = (state) => {

//     return {
//         list: state.get('home').get('list'),
//         listPage: state.get('home').get('listPage')
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getMoreList(listPage) {

//             dispatch(actionCreators.loadMore(listPage))
//         }

//     }

// }
export default connect(null, null)(WriteInfo)