import  React,{Component} from 'react'
import {WriterWrapper,ErWeiMa,DownLoad} from '../style'
class Writer extends Component{
    render(){
        return(
            // <div>这是Writer页面</div>
            <WriterWrapper>
                <ErWeiMa>
                    <img className='WriterPic' src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" alt=""/>
                </ErWeiMa>
                <DownLoad>
                    <p className='downToPhone'>下载简书手机App</p>
                    <p className='downDesc'>随时随地发现和创作内容</p>
                </DownLoad>
            </WriterWrapper>
        )
    }
}

export default Writer