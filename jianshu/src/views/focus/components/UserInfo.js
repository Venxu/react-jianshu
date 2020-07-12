import React, { Component } from 'react'
import { FocusUser, Test, Fans, UserItem, TopBody, UserImg, UserIntrod, Middle, MiddleBox, MiddleFans, MiddleWorks, ListItem, Bottom } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'




class UserInfo extends Component {

    render() {

        return (

            <div>
                <TopBody>
                    {

                        this.props.tabs.map((item, index) => {
                            return (
                                // <FocusUser key={index} onClick={() => this.props.changeTab(index)}>{item}</FocusUser>
                                <FocusUser key={index} onClick={() => this.props.changeTab(index)}>
                                    <p className={this.props.tab === index ? "active aa" : "aa"}>{item}</p>

                                </FocusUser>

                            )

                        })
                    }

                </TopBody>
                <div>
                    {this.props.userItem.map((item, index) => {
                        return (

                            <div>
                                {/* <span className="activeNone">{item.get('tabName')}</span> */}
                                {this.props.tab === index ?
                                    <UserItem key={index}>
                                        {item.get('children').map((item, index) => {
                                            return (
                                                <ListItem>
                                                    <UserImg>
                                                        <img className='userImg' src={item.get('pic')} alt="" />
                                                    </UserImg>
                                                    <UserIntrod>
                                                        <Middle>
                                                            <p className='name listname'>{item.get('name')}</p>
                                                            <MiddleBox>

                                                                <p className='boxFocus'>关注<span>-</span><span className='boxTop'>{item.get('focus')}</span></p>
                                                            </MiddleBox>
                                                            <MiddleFans>

                                                                <p className='boxFocus'>粉丝<span>-</span><span className='boxTop'>{item.get('fans')}</span><span></span></p>
                                                            </MiddleFans>
                                                            <MiddleWorks>
                                                                <p className='boxFocus'>文章 <span>-</span> <span className='boxTop'>{item.get('title')}</span><span></span></p>
                                                            </MiddleWorks>
                                                            <Bottom>
                                                                <p className='writeNum'>  写了 44923 字，获得了 890 个喜欢</p>
                                                            </Bottom>
                                                        </Middle>

                                                    </UserIntrod>
                                                    <button className='Focus Button'>+关注</button>
                                                </ListItem>
                                            )
                                        }
                                        )
                                        }

                                    </UserItem> : ''}
                            </div>


                        )

                    })}
                </div>

            </div>
        )
    }
    componentDidMount(){
        this.props.getFetchData()
    }

}
const mapState = (state) => {
    return {
        tab: state.get('focus').get('tab'),
        tabs: state.get('focus').get('tabs'),
        userItem: state.get('focus').get('userItem')


    }
}

const mapDispatch = (dispatch) => {
    return {
        // 获取列表数据
        getFetchData(){
            dispatch(actionCreators.getData())

        },
        changeTab(index) {
            dispatch(actionCreators.changeTab(index))

        }

    }
}
export default connect(mapState, mapDispatch)(UserInfo)