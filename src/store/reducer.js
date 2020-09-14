/*
 * @Author: your name
 * @Date: 2020-09-13 21:22:36
 * @LastEditTime: 2020-09-14 00:13:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reduxDemo/store/reducer.js
 */
import { CHANGE_VAL, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
    inputValue: 'Write Something',
    list: [
        // "测试数据11111",
        // "测试数据22222",
        // "测试数据33333",
        // "测试数据44444",
    ]
}
export default (state = defaultState, action) => {
    // reducer 中只能接收state  不能改变state
    if (action.type === CHANGE_VAL) {
        // 声明局部变量来深度拷贝它来进行修改
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    
    if (action.type === ADD_ITEM) {
        // 声明局部变量来深度拷贝它来进行修改
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } 

    if (action.type === DEL_ITEM) {
        // 声明局部变量来深度拷贝它来进行修改
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    } 
    if (action.type === GET_LIST) {
        // 声明局部变量来深度拷贝它来进行修改
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    } 

    return state
}