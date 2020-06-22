import styled from 'styled-components'

export const HomeWrapper=styled.div`
width:1200px;

margin:0 auto; 
overflow:hidden;


`

export const HomeLeft=styled.div`
width:800px;

float:left;
margin-left:15px;
padding-top:30px;

.banner-img{
    width:800px;
    height:270px;
 
}


`

export const HomeRight=styled.div`
width:320px;
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
border-bottom:1px solid #dcdcdc;
.ListPic{
    width:125px;
    height:100px;
    display:block;
    float:right;
    border-radius:10px;

}


`
export const ListInfo=styled.div`
width:670px;
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

export const RecommendWrapper=styled.div`
width:280px;
height:200px;
margin:20px 0;

`

export const RecommendItem=styled.div`
width:280px;
height:50px;
background:url(${(props)=>props.imgUrl});
background-size:contain;
`

export const WriterWrapper=styled.div`
width:280px;
heigth:82px;
border:1px solid #dcdcdc;
overflow:hidden;

`
export const ErWeiMa=styled.div`
width:60px;
heigth:60px;
float:left;
padding:10px 22px;
.WriterPic{
    width:60px;
    heigth:60px;
}

`
export const DownLoad=styled.div`
width:143px;
heigth:60px;
float:left;

margin-top:20px;
.downToPhone{
    font-size: 15px;
    color: #333;
}
.downDesc{
    margin-top: 4px;
    font-size: 13px;
    color: #999;
}
`
export const LoadMore=styled.div`
width:100%;
height:40px;
line-height:40px;
background:#a5a5a5;
text-align:center;
color:#fff;
margin:30px 0;
cursor:pointer;
border-radius:20px;
`

export const BackTop=styled.div`
position:fixed;
right:50px;
bottom:80px;
width:60px;
height:60px;
line-height:60px;
border:1px solid #dcdcdc;
font-size:14px;
text-align:center;

`