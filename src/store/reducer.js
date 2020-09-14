/*
 * @Author: your name
 * @Date: 2020-09-13 21:22:36
 * @LastEditTime: 2020-09-14 21:10:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reduxDemo/store/reducer.js
 */
import { CHANGE_VAL, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'
import { Modal } from 'antd'
const defaultState = {
    inputValue: 'Write Something',
    list: [
        // "测试数据11111",
        // "测试数据22222",
        // "测试数据33333",
        // "测试数据44444",
    ]
}
// !!!!reducer 中只能接收state  不能改变state!!!
// 通过Object.assigin实现 es6
const deepClone6 = (obj) => {
    let proto = Object.getPrototypeOf(obj);
    return Object.assign({}, Object.create(proto), obj);
}
// javascript(ES5)中对象的克隆
const deepClone5 = (obj) => {
    var newObj = obj instanceof Array ? [] : {};
    for (var i in obj) {
        newObj[i] = typeof obj[i] == 'object' ?
            deepClone5(obj[i]) : obj[i];
    }
    return newObj;
}

function changeVal(state, action) {
    // 声明局部变量来深度拷贝它来进行修改
    let newState = deepClone6(state)
    newState.inputValue = action.value
    return newState
}

function addItem(state, action) {
    // 声明局部变量来深度拷贝它来进行修改
    let newState = deepClone6(state)
    if (newState.inputValue) {
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else {
        // message.error("输入不能为空")
        let config = {
            content: '输入不能为空',
        }
        Modal.error(config)
        return newState
    }
}

function delItem(state, action) {
    // 声明局部变量来深度拷贝它来进行修改
    let newState = deepClone5(state)
    newState.list.splice(action.index, 1)
    return newState
}

function getList(state, action) {
    // 声明局部变量来深度拷贝它来进行修改
    let newState = deepClone5(state)
    newState.list = action.data
    return newState
}

export default (state = defaultState, action) => {
    // !!!!reducer 中只能接收state  不能改变state!!!
    switch (action.type) {
        case CHANGE_VAL:
            return changeVal(state, action)
        case ADD_ITEM:
            return addItem(state, action)
        case DEL_ITEM:
            return delItem(state, action)
        case GET_LIST:
            return getList(state, action)
        default:
            return state
    }

    // if (action.type === CHANGE_VAL) {
    //     // 声明局部变量来深度拷贝它来进行修改
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.inputValue = action.value
    //     return newState
    // }

    // if (action.type === ADD_ITEM) {
    //     // 声明局部变量来深度拷贝它来进行修改
    //     let newState = JSON.parse(JSON.stringify(state))
    //     if (newState.inputValue) {
    //         newState.list.push(newState.inputValue)
    //         newState.inputValue = ''
    //         return newState
    //     } else {
    //         // message.error("输入不能为空")
    //         let config = {
    //             content: '输入不能为空',
    //         }
    //         Modal.error(config)
    //     }
    // }

    // if (action.type === DEL_ITEM) {
    //     // 声明局部变量来深度拷贝它来进行修改
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.list.splice(action.index, 1)
    //     return newState
    // }

    // if (action.type === GET_LIST) {
    //     // 声明局部变量来深度拷贝它来进行修改
    //     let newState = JSON.parse(JSON.stringify(state))
    //     newState.list = action.data
    //     return newState
    // }


    // if (action.type === CHANGE_VAL) {
    //     return changeVal(state,action)
    // }

    // if (action.type === ADD_ITEM) {
    //     return addItem(state,action)
    // }

    // if (action.type === DEL_ITEM) {
    //     return delItem(state,action)
    // }

    // if (action.type === GET_LIST) {
    //     return getList(state,action)
    // }
    // return state
}
