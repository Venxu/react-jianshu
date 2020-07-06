import  React,{Component} from 'react'
import {WriterWrapper,ErWeiMa,DownLoad,BigErWeima} from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
class Writer extends Component{
    render(){
        return(
            // <div>这是Writer页面</div>
            <WriterWrapper>
                {
                    this.props.isShow?
                     <BigErWeima>
                    <img className='bigErWeima' src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" alt=""/>
                </BigErWeima>:''
                }
               
                <ErWeiMa>
                    <img className='WriterPic' src="http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" alt=""/>
                </ErWeiMa>
                <DownLoad onMouseMove={()=>this.props.handleShow(this.props.isShow)} onMouseOut={()=>this.props.handleHidden(this.props.isShow)}>
                    <p className='downToPhone'>下载简书手机App</p>
                    <p className='downDesc'>随时随地发现和创作内容</p>
                </DownLoad>
            </WriterWrapper>
        )
    }
}
  const mapState=(state)=>{
   
      return{
          isShow:state.get('home').get('isShow')
      }
  }
  const mapDispatch=(dispatch)=>{
      return {
        handleShow(isShow){
           dispatch(actionCreators.bigErweima(isShow))

        },
        handleHidden(trueShow){
            if(trueShow===true){
                dispatch(actionCreators.bigTrueShow(false))

            }
           

        }

      }
  }

export default connect(mapState,mapDispatch)(Writer)