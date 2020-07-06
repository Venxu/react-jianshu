
// 数据变成不可改变得类型
import { fromJS } from 'immutable'
import { actionType } from './index'
const defaultState = fromJS({
    userInfoList:[{
        tabs:'关注用户',
        userList:[
            {
                id:1,
                pic:'ss',
                name:'lll',
                focus:11,
                fans:23,
                title:2222
            }
        ]
    },
    {
        tabs:'粉丝',
        userList:[
            {
                id:2,
                pic:'ss',
                name:'lll',
                focus:11,
                fans:23,
                title:2222
            }
        ]
    }
]
    

})
// reducer导出的是个纯函数:给点固定输入就有输出，参数不可变

export default (state = defaultState, action) => {

    switch (action.type) {
       
     


    }
    return state

}