import React, { Component } from 'react'
import { WriterRight, CreateWriter, WriteTop, SelfIntrod, DetailIntrod, OtherFocus, LikeTitle, SpecTitle, Content, OtherWork, WorkContent } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'




class RightList extends Component {
    render() {


        return (

            <WriterRight>
                <WriteTop>
                    <CreateWriter>
                        <img className='create-img' src="https://upload.jianshu.io/user_badge/19c2bea4-c7f7-467f-a032-4fed9acbc55d" alt="" />
                        <div className='textStyle'> 简书创作者</div>

                    </CreateWriter>
                    <CreateWriter>
                        <img className='create-img' src="https://upload.jianshu.io/user_badge/c7915ada-b7c3-49e9-984b-8ed275d3c94c" alt="" />
                        <div className='textStyle'>  商业管理优秀作者</div>

                    </CreateWriter>

                    <CreateWriter>
                        <img className='create-img' src="https://upload.jianshu.io/user_badge/3eaaaac7-de86-4811-86e1-44d82cbac20f" alt="" />
                        <div className='textStyle'>   视觉达人</div>

                    </CreateWriter>

                    <CreateWriter>
                        <img className='create-img' src="https://upload.jianshu.io/user_badge/b8f6544c-367e-4c1a-81f6-4a4875c556d8" alt="" />
                        <div className='textStyle'>   简书版权</div>

                    </CreateWriter>

                    <CreateWriter>
                        <img className='create-img' src="https://upload.jianshu.io/user_badge/f17e9e0e-33aa-47c9-a444-4270e511654a" alt="" />
                        <div className='textStyle'>   简书签约作者</div>

                    </CreateWriter>

                    <CreateWriter>
                        <img className='create-img' src="https://upload.jianshu.io/user_badge/f61ba9db-af37-417c-889a-2bfa1536b728" alt="" />
                        <div className='textStyle'>简书尊享会员</div>

                    </CreateWriter>
                </WriteTop>
                <SelfIntrod>
                    <p className='selfStyle'>个人介绍</p>
                    <DetailIntrod>畅销书作者 / 知乎: 吴晓布 / 微信公众号：驴光掠影</DetailIntrod>
                    <DetailIntrod >
                        <p className='bottomText'>版权合作事宜请联系行距文化：pub@hangju-pub.com，未经允许的任何转载将被视为侵权，将追究法律责任。</p>
                    </DetailIntrod>
                    <span class="iconfont">&#58881;</span>
                </SelfIntrod>
                <OtherFocus>
                    <LikeTitle>
                        <span class="iconfont icon-zhuanti"></span>
                        <span className='focusText'>他关注的专题/文集/连载</span>
                    </LikeTitle>

                    <LikeTitle>
                        <span class="iconfont icon-like"></span>
                        <span className='focusText'>他喜欢的文章</span>
                    </LikeTitle>
                </OtherFocus>
                <SpecTitle>
                    <p className='otherTitle'>他创建的专题</p>
                    <Content>
                        <img className='TitleImg' src="https://upload.jianshu.io/collections/images/369439/IMG_8049.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                        <div className='titleIntrod'>旅行摄影</div>
                    </Content>
                    <Content>
                        <img className='TitleImg' src="https://upload.jianshu.io/collections/images/366152/ken-tomita-239370-2048.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                        <div className='titleIntrod'>认知提高</div>
                    </Content>
                </SpecTitle>
                <SpecTitle>
                    <p className='otherTitle'>他管理的专题</p>
                    <Content>
                        <img className='TitleImg' src="https://upload.jianshu.io/collections/images/1686785/crop1542889367917.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                        <div className='titleIntrod'>小鱼学摄影</div>
                    </Content>
                    <Content>
                        <img className='TitleImg' src="https://upload.jianshu.io/collections/images/1630119/crop1528070643386.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                        <div className='titleIntrod'>你拍我画第二季照片评奖池</div>
                    </Content>
                </SpecTitle>

                {/* <OtherWork>
                    <p className='workTitle'>他的文集</p>
                    <WorkContent>
                        <span class="iconfont icon-wenzhang"></span>
                        <span className='workIntrod'>如何提升能力系列</span>
                    </WorkContent>
                    <WorkContent>
                        <span class="iconfont icon-wenzhang"></span>
                        <span className='workIntrod'>如何提升能力系列</span>
                    </WorkContent>
                    <WorkContent>
                        <span class="iconfont icon-wenzhang"></span>
                        <span className='workIntrod'>如何提升能力系列</span>
                    </WorkContent>
                </OtherWork> */}
            </WriterRight>


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
export default connect(null, null)(RightList)