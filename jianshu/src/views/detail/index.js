import React, { Component } from 'react'
import { DetailWrapper,Header,Content } from './style'
import {connect} from 'react-redux'
import { actionCreators } from '../detail/store'
import {withRouter} from 'react-router-dom'

class Detail extends Component {
    render() {
        return (
         
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content>
                    <img src={this.props.pic} alt=""/>
                    <p>{this.props.content}</p>
                    <p>{this.props.content}</p>
                    <p>{this.props.content}</p>
                    <p>{this.props.content}</p>
                    <p>{this.props.content}</p>
                    <p>{this.props.content}</p>
                
                </Content>
            </DetailWrapper>
        
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
    }
}

const mapStateProps=(state)=>{
    return {
        title:state.get('detail').get('title'),
        pic:state.get('detail').get('pic'),
        content:state.get('detail').get('content')
    }
}

const mapDispatch=(dispatch)=>{
    return {
        getDetail(id){
            dispatch(actionCreators.getDetailList(id))

        }
    }
}
// 使用loadable后避免接收参数错误所以使用withRouter
export default connect(mapStateProps,mapDispatch)(withRouter(Detail))