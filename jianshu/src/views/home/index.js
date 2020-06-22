import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight,BackTop } from './style'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'

import { connect } from 'react-redux'
import { actionCreators } from './store'

class Home extends Component {
    handleScroll(){
      
        window.scrollTo(0,0)
    }
    render() {
        return (
            // <HomeBox>
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload-images.jianshu.io/upload_images/2509688-5bd44d55ff3fe90d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1024/format/webp" alt="" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScroll}>回到顶部</BackTop>:''}
            </HomeWrapper>
            // </HomeBox>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvent()
        
    }
    // 组件销毁时移出组件
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.handleScrollValue)
    }
    bindEvent(){
        window.addEventListener('scroll',this.props.handleScrollValue)
    }
}
const mapStatePrps=(state)=>{
    return{
        showScroll:state.get('home').get('showScroll')
    }
}
const mapStateDispatch = (dispatch) => ({
    changeHomeData() {
        // 异步请求放在redux-thunk中，创建actionCreators
        dispatch(actionCreators.getHomeData())
    },
    handleScrollValue(){
        if(document.documentElement.scrollTop>400){
            dispatch(actionCreators.changeScrollShow(true))
        }else{
           dispatch(actionCreators.changeScrollShow(false))
        }
        console.log(document.documentElement.scrollTop)
    }
})
export default connect(mapStatePrps, mapStateDispatch)(Home);