import React, { Component } from 'react'
import { FocusUser, Fans,UserItem,TopBody,UserImg,UserIntrod,Middle,MiddleBox,MiddleFans,MiddleWorks } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'




class UserInfo extends Component {
    render() {
console.log(this.props.userInfoList)
        return (
            
            <div>
                 <TopBody>
                <FocusUser className='focusUser'>关注用户 122</FocusUser>
                <Fans className='focusUser'>粉丝 318874</Fans>
                </TopBody>
                <UserItem>
                    <UserImg>
                        <img className='userImg' src="https://cdn2.jianshu.io/assets/default_avatar/14-0651acff782e7a18653d7530d6b27661.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180" alt=""/>
                    </UserImg>
                    <UserIntrod>
                    <Middle>
                    <p className='name listname'>三生石上生桃花</p>
                    <MiddleBox>
                        
                        <p className='boxFocus'>关注<span>-</span><span className='boxTop'>122</span></p>
                    </MiddleBox>
                    <MiddleFans>
                        
                        <p className='boxFocus'>粉丝<span>-</span><span className='boxTop'>3187</span><span></span></p>
                    </MiddleFans>
                    <MiddleWorks>
                        <p className='boxFocus'>文章 <span>-</span> <span className='boxTop'>290</span><span></span></p>
                    </MiddleWorks>
                    </Middle>
                    </UserIntrod>
                    <button className='Focus Button'>+关注</button>
                </UserItem>
            </div>
        )
    }
    // componentDidMount(){
    //     this.props.fetchData()
    // }
}
 const mapState=(state)=>{
    //  console.log(state.get('focus').get('userInfoList'))
     return {
        userInfoList:state.get('focus').get('userInfoList')
         

     }
 }
export default connect(mapState, null)(UserInfo)