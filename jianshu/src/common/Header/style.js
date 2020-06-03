import styled from 'styled-components'
import LogoPic from '../../static/logo.png'
import ScorePic from '../../static/score.png'

 export const HeaderWarper=styled.div`
 position:relative;
width:100%;
height:56px;
border-bottom:1px solid #e7e7e7;
`

export const Logo=styled.a`
height:56px;
width:100px;

position:absolute;
display:block;
top:0;
left:0;
background:url(${LogoPic});
background-size:contain;
`
export const Nav=styled.div`
width:960px;
height:56px;
margin:0 auto;
padding-right:70px;
box-sizing:border-box;

`

export const NavItem=styled.div`
padding:0 15px;
line-height:56px;
font-size:17px;
&.left{
    float:left;

}
&.actived{
    color:#ea6f5a;
}
&.down{
    color:#333;
}
&.login{
    color:#969696;
    
}
&.right{
    float:right;
}

`
export const Score=styled.div`
margin:15px 0;
line-height:26px;
width:56px;
height:26px;
background:url(${ScorePic});
background-size:contain;

`
export const Search=styled.input.attrs({
    placeholder:'搜索'

})`
width:160px;
height:38px;
border:none;
outline:none;
border-radius:19px;
margin:10px 0;
color:#777;
padding:0 40px 0 20px;
box-sizing:border-box;
&.focused{
    width:250px;
   
}
background: #eee;
margin-left:15px;
&::placeholder:{
    color:#eee;
}
`
export const NavSearch=styled.div`
position:relative;
float:left;
.fade-enter { 
    transition: all .2s ease-out;
}
.fade-enter active{
    width:250px;
}
.fade-exit { 
    transition: all .2s ease-out;
}
.fade-exitr active{
    width:160px;
}
.iconfont{
    position:absolute;
    right:2px;
    bottom:12px;
    width:36px;
    line-height:36px;
    border-radius:50%;
    text-align:center;
    &.focused{
        background:#777;
        color:#fff;
    
    }
   
  
}


`
export const Additon=styled.div`
position:absolute;

top:0;
right:0;
heigth:56px;
`
export const Button=styled.div`
float:right;

height:38px;
line-height:38px;
border:1px solid #ea6f5a;

border-radius:19px;
margin:10px 20px;
padding:0 20px;
font-size:14px;
&.writ{
    color:#fff;
    background:#ea6f5a;
}
&.reg{
    color:#ea6f5a;

}

`

