import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Advice, AdviceLeft, AdviceRight, RecommendList, TopIntrod, Focus, LookMore } from '../style'
import { Link } from 'react-router-dom'
class RecommendWriter extends Component {
    render() {


        return (
            // <div>这是推荐作者页面</div>
            <div>
                <Advice>
                    <AdviceLeft>推荐作者</AdviceLeft>
                    <AdviceRight>换一批</AdviceRight>
                </Advice>
                {
                    this.props.recommendWiterList.map((item) => {
                        return <RecommendList key={item.get('id')}>
                            <img src={item.get('pic')} alt="" className='introdImg' />
                            <Link to={'/WriteInfo/'+item.get('id')}>
                          
                            <TopIntrod>
                                <p className='trodTop'>{item.get('writerName')}</p>
                                <p className='introd'>{item.get('writeNum')}</p>
                            </TopIntrod>
                            </Link>
                            <Link to={'/login'} key={item.get('id')}>
                                <Focus>+关注</Focus>
                            </Link>

                        </RecommendList>

                    })
                }

                <LookMore>查看更多</LookMore>


            </div>

        )
    }
    componentDidMount() {
        this.props.fetchData()
    }
}

const mapState = (state) => {

    return {

        recommendWiterList: state.get('home').get('recommendWriterList')
    }
}
const mapDispatch = (dispatch) => {
    return {
        fetchData() {
            dispatch(actionCreators.getWriterList())
        }

    }
}
export default connect(mapState, mapDispatch)(RecommendWriter)