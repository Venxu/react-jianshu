import React, { Component } from 'react'
import { TitleBody, TitleItem, TitleName, TitleList, TitleLeft, TitleRight, ItemTab } from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'




class Title extends Component {

    render() {

        return (<div>
            <TitleBody>
                <TitleItem>
                    {/* <span className='&#xe629;'></span> */}
                    {
                        this.props.titleTabs.map((item, index) => {
                            return (

                                <TitleName key={index} onClick={() => this.props.changeTab(index)}>
                                    <p className={this.props.titleTab === index ? "tabActive" : ""}>{item}</p>
                                </TitleName>

                            )

                        })
                    }
                </TitleItem>
            </TitleBody>
            <div>
                {this.props.tabData.map((item, index) => {
                    return (
                    this.props.titleTab === index ?
                   
                        <ItemTab key={index}>
                            {/* {item.get('children')} */}
                           {item.get('children').map((items,index)=>{
                               return ( <TitleList key={index}>
                                <TitleLeft>
                               <p className='top-title'>{items.get('title')}</p>
                                    <p className='bottom-title'>{items.get('desc')}
                                       
                                    </p>
                                 </TitleLeft>
                                 <TitleRight>
                                     <img className='title-img' src={items.get('pics')} alt="" />
                                 </TitleRight>

                            </TitleList>)
                           })}
                         
                   </ItemTab> 
                        : ''
                        )
                })}

            </div>


        </div>)
    }
    componentDidMount() {
        this.props.getFetchTabData()
    }


}
const mapState = (state) => {
    console.log(state.get('focus').get('tabData'))


    return {
        titleTab: state.get('focus').get('titleTab'),
        titleTabs: state.get('focus').get('titleTabs'),
        tabData: state.get('focus').get('tabData')


    }
}

const mapDispatch = (dispatch) => {
    return {
        // 获取列表数据
        getFetchTabData() {
            dispatch(actionCreators.getTabData())

        },
        changeTab(index) {
            console.log(index)
            dispatch(actionCreators.changeTitleTabs(index))

        }

    }
}
export default connect(mapState, mapDispatch)(Title)


// // 截取数组slice() 和 splice() 的用法

// // 1、slice():①slice() 方法可从已有的数组中返回选定的元素。②可提取字符串的某个部分，并以新的字符串返回被提取的部分
// // ①他是将截取到一个新数组返回,不会改变原数组 slice(start,end)，start开始的索引，end结束的索引（选填），包括开始但是不包括结束

// var arr=['1','2','3','4']
// console.log(arr.slice(1,3))//['2','3']

// // 如果索引为负数，则从倒数开始，索引为-1，就是倒数第一个，-2倒数第二个
//  var arr=['1','2','3','4','5']
//  console.log(arr.slice(3,-1))//['4']

// //  如果参数只有一个值，则从开始的位置一直截取到最后
// var arr=['1','2','3','4','5']
// console.log(arr.slice(2))//['3','4','5']


// // 数组中的splice()方法
// // 删除数组中的指定元素，该方法会改变原数组 splice(index,howmoney,item),index:从哪里开始删除，howmoney：删除多少个，item：传递新的元素，自动插入开始元素的前面
// var arr = ["贾宝玉", "林黛玉", "薛宝钗", "王熙凤", "香菱"];   
// console.log(arr.splice(1,2)); //  ["林黛玉", "薛宝钗"]
// console.log(arr);  // ["贾宝玉", "王熙凤", "香菱"]

// //  当第二个参数(删除数量)小于0视为0
// var arr = ["贾宝玉", "林黛玉", "薛宝钗", "王熙凤", "香菱"];
// console.log(arr.splice(1, -2)); //  []
// console.log(arr);  // ["贾宝玉", "林黛玉", "薛宝钗", "王熙凤", "香菱"]

// //  删除并添加
// var arr = ["贾宝玉", "林黛玉", "薛宝钗", "王熙凤", "香菱"];
// console.log(arr.splice(1, 2, '晴雯', '紫鹃')); // ["林黛玉", "薛宝钗"]
// console.log(arr);  // ["贾宝玉", "晴雯", "紫鹃", "王熙凤", "香菱"]

