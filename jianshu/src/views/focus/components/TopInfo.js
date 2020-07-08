import React, { Component } from 'react'
import { TopMsg, Middle, SendContent, MiddleBox, MiddleFans, MiddleWorks, MiddleTexts, MiddleLIke } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'
import Title from './Title'



class TopInfo extends Component {
    render() {


        return (
            <div>

          
            <TopMsg>
                <img className='topImg' src="https://upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" alt="" />
                <Middle>
                    <p className='name'>吴晓布</p>
                    <MiddleBox>
                        <p className='boxTop'>122</p>
                        <p className='boxFocus'>关注<span>-</span></p>
                    </MiddleBox>
                    <MiddleFans>
                        <p className='boxTop'>318817</p>
                        <p className='boxFocus'>粉丝<span>-</span></p>
                    </MiddleFans>
                    <MiddleWorks>
                        <p className='boxTop'>290</p>
                        <p className='boxFocus'>文章<span>-</span></p>
                    </MiddleWorks>
                    <MiddleTexts>
                        <p className='boxTop'>802137</p>
                        <p className='boxFocus'>字数<span>-</span></p>
                    </MiddleTexts>
                    <MiddleLIke>
                        <p className='boxTop'>25093</p>
                        <p className='boxFocus'>收货喜欢<span>-</span></p>
                    </MiddleLIke>
                    <p className='money'>11.4w</p>
                    <p className='totalMoney'>总资产</p>
                </Middle>
                <SendContent>
                    <button className='sendMg'>发简信</button>
                    <button className='Focus'>+关注</button>
                </SendContent>


            </TopMsg>
           
                {/* <UserInfo></UserInfo> */}
                <Title></Title>
           
            </div>
          )
    }
}


export default connect(null, null)(TopInfo)