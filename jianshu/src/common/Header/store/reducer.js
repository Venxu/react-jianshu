import actionCreators from './actionCreators'

const defaultState = {
    focused: false,
    list: []
}

export default (state = defaultState, action) => {
    // switch (action.type) {
    //     case 'change_input':
    //         focused = true
    //         break;
    //     case 'search_input':
    //         focused = false
    //         break;
    //     // return {focused:true}
    // }

    if (action.type === 'change_input') {
        // const focused=JSON.parse(JSON.stringify(state))
        return {
            focused: true

        }

    }
    if (action.type === 'search_input') {
        // const  focused=JSON.parse(JSON.stringify(state))
        return {
            focused: false
        }

    }
    return state


}