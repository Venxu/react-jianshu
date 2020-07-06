import styled from 'styled-components'

export const HomeWrapper = styled.div`
width:1200px;

margin:0 auto; 
overflow:hidden;


`
// 大图二维码
export const BigErWeima=styled.div`
width:150px;
height:150px;
position:absolute;
.bigErWeima{
    width:150px;
height:150px;
position:relative;
left:60px;
bottom:170px;

}

`

export const HomeLeft = styled.div`
width:800px;

float:left;
margin-left:15px;
padding-top:30px;

.banner-img{
    width:800px;
    height:270px;
 
}


`

export const HomeRight = styled.div`
width:320px;
height:300px;

float:right;

`
// topic样式
export const TopicWrapper = styled.div`
padding:20px 0 10px 0;
overflow:hidden;
margin-left:-18px;


`
export const TopicItem = styled.div`
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

export const ListItem = styled.div`
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
export const ListInfo = styled.div`
width:670px;
float:left;
.title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333333;

}
.desc{
    font-size:13px;
    line-height:24px;
    color:#999;
}

`

export const RecommendWrapper = styled.div`
width:280px;
height:200px;
margin:20px 0;

`

export const RecommendItem = styled.div`
width:280px;
height:50px;
background:url(${(props) => props.imgUrl});
background-size:contain;
`

export const WriterWrapper = styled.div`
width:280px;
heigth:82px;
border:1px solid #dcdcdc;
overflow:hidden;

`
export const ErWeiMa = styled.div`
width:60px;
heigth:60px;
float:left;
padding:10px 22px;
.WriterPic{
    width:60px;
    heigth:60px;
}

`
export const DownLoad = styled.div`
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
export const LoadMore = styled.div`
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

export const BackTop = styled.div`
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

export const Advice = styled.div`
width:280px;
height:20px;
margin-top:30px;
margin-bottom:20px;


`
export const AdviceLeft = styled.div`
width:56px;
height:16px;
line-height:16px;
text-align:center;
float:left;
font-size: 14px;
color: #969696;

`
export const AdviceRight = styled.div`
width:56px;
height:16px;
line-height:16px;
text-align:center;
float:right;
font-size: 14px;
color: #969696;
cursor:pointer;

`

export const RecommendList = styled.div`
width:280px;
height:50px;
margin-bottom:20px;
cursor:pointer;

.introdImg{
    float:left;
    width:48px;
    hieght:48px;
    border-radius:50%;
}
.trodTop{
    color: #333;
    margin-top: 5px;
font-size: 12px;
line-height:12px;
}
.introd{
margin-top: 10px;
font-size: 12px;
color: #969696;
line-height:12px;


}
`
export const TopIntrod = styled.div`
width:170px;
height:45px;
float:left;
margin-left:10px;

`

export const Focus = styled.div`
width:40px;
height:17px;
margin-top: 10px;
float: right;
padding: 0;
font-size: 13px;
color: #42c02e;
`

export const LookMore=styled.div`
width:280px;
height:35px;
text-align:center;
line-height:35px;
font-size: 13px;
color: #787878;
background-color: #f7f7f7;
border: 1px solid #dcdcdc;
border-radius: 4px;
cursor:pointer;


`