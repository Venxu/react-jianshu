import  React,{Component} from 'react'
import{RecommendWrapper,RecommendItem} from '../style'
import {connect} from 'react-redux'

class Recommend extends Component{
    render(){
        
        const {RecommendList}=this.props
        return(
            <RecommendWrapper>
                {RecommendList.map((item)=>{
                    return (
                        <RecommendItem imgUrl={item.get('pic')} key={item.get('id')}>
                        </RecommendItem>
                    )

                })}
               
            </RecommendWrapper>
        
        )
    }
}

const mapState=(state)=>{
    console.log(state)
    return{
        RecommendList:state.get('home').get('RecommendList')
    }
}
export default connect(mapState,null)(Recommend)