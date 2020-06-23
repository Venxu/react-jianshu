import React from 'react'
import { HeaderWarper, Logo, Nav, NavItem, Score, Search, Button, Additon, NavSearch, SearchInfo, SeacrchInfoTitle, SearchInfoSwitch, SearchInfoItem } from './style'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {Link} from 'react-router-dom'
import { actionCreators } from './store/index'




class Header extends React.Component {

    // 定义方法，显示内容区域,接收参数show
    serarchArea() {
        const pageList = []
        // 将list转成immutable类型
        let list = this.props.list
        const newList = list.toJS()
        if (newList.length) {
            for (let i = (this.props.page - 1) * 10; i < this.props.page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )

            }

        }
        if (this.props.focused || this.props.mouseIn) {
            return (
                <SearchInfo onMouseEnter={this.props.handleMouseIn}
                    onMouseLeave={this.props.handleMouseLeave}>
                    <SeacrchInfoTitle>热门搜索
             <SearchInfoSwitch onClick={() => this.props.handleChangePage(this.props.page, this.props.totalPage)}>
                            {/* 这里加图片 */}
                            {/* ref获取dom节点 */}
                            <i ref={(icon) => { this.spinIcon = icon }}></i>
                            换一换
             </SearchInfoSwitch>
                    </SeacrchInfoTitle>
                    <div>
                        {
                            pageList
                            // this.props.list.map((item)=>{
                            // return  
                            // })
                        }
                    </div>
                </SearchInfo>
            )
        } else {
            return
        }

    }

    // constructor(props){
    //     super(props)
    //     this.handleInputFocus=this.handleInputFocus.bind(this)
    //     this.handleInputBlur=this.handleInputBlur.bind(this)
    // }

    render() {
        // console.log(this.props)
        // 方法和store里的值都映射到props中，方法和获取值都要用this.props

        return (
            <HeaderWarper>
                <Link to='/'>
                    <Logo></Logo>
                </Link>

                <Nav>
                    <NavItem className="left actived">首页</NavItem>
                    <NavItem className="left down">下载app</NavItem>
                    <NavSearch >
                        <CSSTransition
                            in={this.props.focused}
                            timeout={2000}
                            classNames='fade'>
                            <Search className={this.props.focused ? 'focused' : ''} onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}></Search>
                        </CSSTransition>
                        <span className={this.props.focused ? 'iconfont icon-sousuo focused' : 'iconfont icon-sousuo'}></span>
                        {this.serarchArea(this.props.focused || this.props.mouseIn)}

                    </NavSearch>
                    {this.props.isLogin}
                    {this.props.isLogin?<NavItem className="right login">退出</NavItem>:<Link to={'/login'}><NavItem className="right login">登录</NavItem></Link>}
                    
                    <NavItem className="right">
                        <Score></Score>
                    </NavItem>
                    <NavItem className="right login">
                        <span className="iconfont icon-Aa"></span>
                    </NavItem>
                    <Additon>
                        <Button className="writ">
                            <span className="iconfont icon-yumaobi"></span>写文章
                       </Button>
                        <Button>注册</Button>

                    </Additon>

                </Nav>
            </HeaderWarper>

        )
    }

}
// 将state里数据映射到组件
const mapStateToProps = (state) => {
    return {

        // immutable调用数据 通过.get(传入属性值)
        // focused: state.header.focused
        // state变成immutable格式数据 所以就是state.get('header')
        // focused: state.getIn(['header','focused'])
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),

        mouseIn: state.get('header').get('mouseIn'),
        isLogin:state.get('login').get('isLogin')

    }

}
// ui组件发生改变时调用dispatch方法
const mapDispatchToProps = (dispatch) => {
    // 改变数据的时候派发action，reducer接收数据
    // 利用actionCreateor创建action，type值定义个常量而不是变量，actionType
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
            // dispatch(actionCreators.getList())
        },
        handleInputBlur() {
            //    console.log("blur")
            dispatch(actionCreators.searchFocus())
        },
        handleMouseIn() {
            // console.log("in")
            dispatch(actionCreators.mouseIn())
        },
        handleMouseLeave() {
            // console.log("ss")
            dispatch(actionCreators.mouseLeave())
        },
        // 换页
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/, '')
            if (originAngle) {
                originAngle = parseInt(originAngle, 10)

            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + ')'
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
            console.log(page, totalPage)

            // dispatch(actionCreators.changePage())

        }

    }

}
// header和store链接
export default connect(mapStateToProps, mapDispatchToProps)(Header)