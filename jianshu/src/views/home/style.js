import styled from 'styled-components'

export const HomeWrapper=styled.div`
width:1200px;

margin:0 auto; 
overflow:hidden;


`

export const HomeLeft=styled.div`
width:625px;

float:left;
margin-left:15px;
padding-top:30px;

.banner-img{
    width:625px;
    height:270px;
 
}


`

export const HomeRight=styled.div`
width:240px;
height:300px;

float:right;

`
// topic样式
export const TopicWrapper=styled.div`
padding:20px 0 10px 0;
overflow:hidden;
margin-left:-18px;


`
export const TopicItem=styled.div`
float:left;
background:#f7f7f7;
height:32px;
padding-right:10px;
line-height:32px;
font-size:14px;
color:#000;
border:1px solid #dcdcdc;
border-radius:4px;
margin-left:18px;
margin-bottom:20px;
.top-pic{
    margin-right:10px;
    float:left;
    display:block;
    width:32px;
    height:32px;

}

`

export const ListItem=styled.div`
overflow:hidden;
padding:20px 0;
border:1px solid #dcdcdc;
.ListPic{
    width:125px;
    height:100px;
    display:block;
    float:right;
    border-radius:10px;
}


`
export const ListInfo=styled.div`
width:500px;
float:left;
.title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:3333;

}
.desc{
    font-size:13px;
    line-height:24px;
    colro:#999;
}

`