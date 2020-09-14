/*
 * @Author: your name
 * @Date: 2020-09-13 23:47:52
 * @LastEditTime: 2020-09-14 14:09:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /reduxDemo/demo/src/TodoListUI.js
 */
import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

// class TodoListUI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         return (
//             <div style={{ margin: '10px' }}>
//                 <div>
//                     <Input
//                         placeholder={this.props.inputValue}
//                         style={{ width: '250px', marginRight: '10px' }}
//                         onChange={this.props.changeVal}
//                         value={this.props.inputValue}
//                     />
//                     <Button type='primary' onClick={this.props.addItem}>增加</Button>
//                 </div>
//                 <div style={{ marginTop: '20px', width: '600px' }}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => (<List.Item onClick={() => { this.props.delItem(index) }}>{item}</List.Item>)}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }
// 封装无状态组件 性能更佳
const TodoListUI = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeVal}
                    value={props.inputValue}
                />
                <Button type='primary' onClick={props.addItem}>增加</Button>
            </div>
            <div style={{ marginTop: '20px', width: '600px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item style={{ position: 'relative' }}>
                            {item}
                            <Button type='default' style={{ right: '30px', position: 'absolute', top: '6px' }} onClick={() => { props.delItem(index) }}>删除</Button>
                        </List.Item>)}
                />
            </div>
        </div>
    );
}

export default TodoListUI;