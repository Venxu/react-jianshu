import React from 'react'
import { HeaderWarper, Logo, Nav, NavItem, Score, Search, Button, Additon, NavSearch } from './style'

class Header extends React.Component {
    render() {
        return (
            <HeaderWarper>
                <Logo href="/"></Logo>
                <Nav>
                    <NavItem className="left actived">首页</NavItem>
                    <NavItem className="left down">下载app</NavItem>
                    <NavSearch>
                    <Search></Search>
                    <span className="iconfont icon-sousuo "></span>
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