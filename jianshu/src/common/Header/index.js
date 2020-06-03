import React from 'react'
import { HeaderWarper, Logo, Nav, NavItem, Score, Search, Button, Additon, NavSearch } from './style'
import { CSSTransition } from 'react-transition-group'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
        this.handleFocusInput = this.handleFocusInput.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }
    handleFocusInput() {
        this.setState({
            focused: true
        })
    }
    handleBlur() {
        this.setState({
            focused: false
        })
    }
    render() {
        return (
            <HeaderWarper>
                <Logo href="/"></Logo>
                <Nav>
                    <NavItem className="left actived">首页</NavItem>
                    <NavItem className="left down">下载app</NavItem>
                    <NavSearch >
                        <CSSTransition
                            in={this.state.focused}
                            timeout={2000}
                            classNames='fade'>
                            <Search className={this.state.focused ? 'focused' : ''} onFocus={this.handleFocusInput} onBlur={this.handleBlur}></Search>
                        </CSSTransition>
                        <span className={this.state.focused ? 'iconfont icon-sousuo focused' : 'iconfont icon-sousuo'}></span>

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
export default Header