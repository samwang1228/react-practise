import { green } from '@material-ui/core/colors';
import React from 'react';

class ToDoAddForm extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            newText: props.todo.text,
            editing: false,
        }
        
    }
    
    // 刪除
    deleteTodo () {
        this.props.remove(this.props.todo.id);
    }

    // 完成
    checkTodoToggle () {
        this.props.checkToggle(this.props.todo.id);
    }

    // 顯示編輯表單
    showEditForm() {
        const {editing} = this.state;

        this.setState({
            newText: this.props.todo.text,
            editing: !editing,
        });
    }

    // 取表單輸入內容
    getNewText(e) {
        const newText = e.target.value;

        this.setState({
            newText: newText,
        });
        
    }
    
    // 儲存編輯資料
    saveEditedValue() {
        const {newText} = this.state;

        this.props.saveEditedValue(this.props.todo.id, newText);
        this.setState({
            newText: this.props.todo.text,
            editing: false,
        });
    }
    

    render () {
        const {editing} = this.state;
        const {todo} = this.props;
        const color_green={
            color:"green",
        }
        const color_red={
            color:"red",
        }
        //console.log(this.state)

        return (
            <li className={ "list-group-item list-row " + (todo.completed ? "done" : "") }>
                <div style={color_green} onClick={() => this.checkTodoToggle()} >✓</div>
                <div className="list-text__container" onDoubleClick={() => this.showEditForm()}>
                    { 
                        !editing && <span className="list-text">{ todo.text }</span> 
                    }
                </div>
                <div style={color_red} onClick={() => this.deleteTodo()} >✕</div>
            </li>
        );
    }
}
export default ToDoAddForm;