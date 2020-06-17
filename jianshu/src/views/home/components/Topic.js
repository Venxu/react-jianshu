import React, { Component } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends Component {

    render() {
        const { list } = this.props

        return (
            // <div>
            //     这是topic页面
            // </div>

            <TopicWrapper>
                {/* list是immutable类型的数据所以用get获取 */}
                {list.map((item) => {
                    return (
                    <TopicItem key={item.get('id')}>
                        <img className='top-pic' src={item.get('pic')} alt="" />
                        {item.get('title')}
                    </TopicItem>
                    )
                })
                }
            </TopicWrapper>

        )
    }
}
const mapState = (state) => {
    return {
        list: state.get('home').get('topList')
    }

}

export default connect(mapState, null)(Topic)