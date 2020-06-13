import React from 'react'
import { HeaderWarper, Logo, Nav, NavItem, Score, Search, Button, Additon, NavSearch, SearchInfo, SeacrchInfoTitle, SearchInfoSwitch,SearchInfoItem } from './style'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {actionCreators} from './store/index'



class Header extends React.Component {
    // 定义方法，显示内容区域,接收参数show
  serarchArea (show) {
        if(show){
            return (
                <SearchInfo>
                <SeacrchInfoTitle>热门搜索
             <SearchInfoSwitch>
                        缓一缓
             </SearchInfoSwitch>
                </SeacrchInfoTitle>
                <div>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </div>
    
    
            </SearchInfo>
            )
        }else{
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
                <Logo href="/"></Logo>
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
                       {this.serarchArea(this.props.focused)}

                    </NavSearch>
                    <NavItem className="right login">登录</NavItem>
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

const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused')
    }

}

const mapDispatchToProps = (dispatch) => {
    // 改变数据的时候派发action，reducer接收数据
    // 利用actionCreateor创建action，type值定义个常量而不是变量，actionType
    return {
        handleInputFocus() {

            dispatch(actionCreators.inputFocus())



            const action = {
                type: 'change_input'
            }
            dispatch(action)
            dispatch(actionCreators.getList())
        },
        handleInputBlur() {
           
            dispatch(actionCreators.inputBlur())
        }


    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Header)