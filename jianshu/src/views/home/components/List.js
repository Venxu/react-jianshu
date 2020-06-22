import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'



class List extends Component {
    render() {

        const { list, getMoreList, listPage } = this.props
        console.log(list)
        return (
            <div>

                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/'+item.get('id')}>
                                <ListItem >
                                    <ListInfo>
                                        <h3 className='title'>{item.get('title')}</h3>
                                        <p className='desc'>{item.get('content')}</p>
                                    </ListInfo>
                                    <img className='ListPic' src={item.get('pic')} alt="" />
                                </ListItem>
                            </Link>
                        )
                    })
                }

                <LoadMore onClick={() => getMoreList(listPage)}>加载更多</LoadMore>

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        list: state.get('home').get('list'),
        listPage: state.get('home').get('listPage')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList(listPage) {

            dispatch(actionCreators.loadMore(listPage))
        }

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(List)