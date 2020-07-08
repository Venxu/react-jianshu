import React, { Component } from 'react'
import { TitleBody, TitleItem, TitleName, TitleList, TitleLeft, TitleRight, Middle, MiddleBox, MiddleFans, MiddleWorks, ListItem, Bottom } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'




class Title extends Component {

    render() {

        return (<div>
            <TitleBody>
                <TitleItem>
                    {/* <span className='&#xe629;'></span> */}
                    {
                        this.props.titleTabs.map((item, index) => {
                            return (

                                <TitleName key={index} onClick={() => this.props.changeTab(index)}>
                                    <p className={this.props.titleTab === index ? "tabActive" : ""}>{item}</p>
                                </TitleName>

                            )

                        })
                    }
                </TitleItem>
            </TitleBody>
            <TitleList>
                <TitleLeft>
                    <p className='top-title'>穿越阿帕拉契亚(十七)创造历史的哥特伍德奶奶</p>
                    <p className='bottom-title'>
                        1955年9月11日，法明顿，缅因州（美联社）— 今天，来自俄亥俄州加利波利斯，行走2050英里阿帕拉契亚山径的67岁的老祖母已经接近了她的旅程...
                    </p>
                </TitleLeft>
                <TitleRight>
                    <img className='title-img' src="https://upload-images.jianshu.io/upload_images/7133325-2529770735d39260.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="" />
                </TitleRight>

            </TitleList>

        </div>)
    }
    componentDidMount() {
        this.props.getFetchTabData()
    }


}
const mapState = (state) => {
    console.log(state.get('focus').get('tabData'))


    return {
        titleTab: state.get('focus').get('titleTab'),
        titleTabs: state.get('focus').get('titleTabs'),
        tabData: state.get('focus').get('tabData')


    }
}

const mapDispatch = (dispatch) => {
    return {
        // 获取列表数据
        getFetchTabData() {
            dispatch(actionCreators.getTabData())

        },
        changeTab(index) {
            console.log(index)
            dispatch(actionCreators.changeTitleTabs(index))

        }

    }
}
export default connect(mapState, mapDispatch)(Title)