/*
 * @Author: your name
 * @Date: 2020-09-13 23:19:42
 * @LastEditTime: 2020-09-14 00:28:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reduxDemo/demo/src/store/actionCreators.js
 */
import { CHANGE_VAL, ADD_ITEM, DEL_ITEM, GET_LIST } from './actionTypes'
import axios from 'axios'

export const changeInputValAction = (val) => ({
    type: CHANGE_VAL,
    value: val
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getToList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
        .then((res) => {
            console.log("res===",res)
        })
        let data = [
            "测试数据5",
            "测试数据6",
            "测试数据7",
        ]
        const action = getListAction(data)
        // store.dispatch(action)
        dispatch(action)
    }
}