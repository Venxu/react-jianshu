import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight,BackTop } from './style'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'
import RecommendWriter from './components/RecomnendWriter'

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
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4986/33b9e72aff1e083dfb5aa7a1c8a427e53fdc1e9e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                    <RecommendWriter></RecommendWriter>
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