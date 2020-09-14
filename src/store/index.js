/*
 * @Author: your name
 * @Date: 2020-09-13 21:20:59
 * @LastEditTime: 2020-09-14 00:21:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reduxDemo/store/index.js
 */

// !引入redux-thunk 中间件  applyMiddleware  引入增强函数compose
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

// 使用增强函数 利用compose创造一个增强函数，就相当于建立了一个链式函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
// 有了增强函数后，就可以把thunk加入进来了，这样两个函数就都会执行了
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(
    reducer,
    enhancer
)
export default store