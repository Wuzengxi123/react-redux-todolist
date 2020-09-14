/*
 * @Author: your name
 * @Date: 2020-09-13 20:54:55
 * @LastEditTime: 2020-09-14 20:43:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reduxDemo/demo/src/TodoList.js
 */
import React, { Component } from 'react';

import store from './store/index'
import { changeInputValAction, addItemAction, delItemAction, getToList } from './store/actionCreators'

import TodoListUI from './TodoListUI'

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeVal = this.changeVal.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addItem = this.addItem.bind(this)
        this.delItem = this.delItem.bind(this)
        // !需要手动订阅一下 不让容易出问题 新版的react已经有此功能建议(新老版本)
        store.subscribe(this.storeChange)
        // console.log(store.getState())
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeVal={this.changeVal}
                addItem={this.addItem}
                list={this.state.list}
                delItem={this.delItem}
            />
        );
    }
    componentDidMount() {
        const action = getToList()
        store.dispatch(action)
    }

    // !订阅模式执行方法
    storeChange() {
        this.setState(store.getState())
    }

    changeVal(e) {
        const action = changeInputValAction(e.target.value)
        store.dispatch(action)
    }

    addItem() {
        const action = addItemAction()
        store.dispatch(action)
    }

    delItem(index) {
        const action = delItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;
