import  React,{Component} from 'react'
import {HomeWrapper,HomeLeft,HomeRight,} from './style'
import Topic from './components/Topic'
import Recommend from './components/Recommend'
import List from './components/List'
import Writer from './components/Writer'

class Home extends Component{
    render(){
        return(
            // <HomeBox>
                <HomeWrapper>
                    <HomeLeft>
                        <img className='banner-img' src="//upload-images.jianshu.io/upload_images/2509688-5bd44d55ff3fe90d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1024/format/webp" alt=""/>
                        <Topic></Topic>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                        <Writer></Writer>
                    </HomeRight>
                </HomeWrapper>
            // </HomeBox>
        )
    }
}

export default Home;