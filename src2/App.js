import logo from './logo.svg';
import './App.css';
import React from 'react';
// import out from './toDoList';
import ToDoAddForm from './ToDoAddForm';
import ToDoTitle from './toDoTitle';
class App extends React.Component {
  constructor (props) {
      super (props);

      this.state = {
          todos: [
              {id: 1, text: '這次作業怎麼那麼難', color:'red', completed: true},
              {id: 2, text: '股票崩盤我要睡公園啦', completed: false},
              {id: 3, text: '快逃阿', completed: false},
          ],
          newId: 4,
          newText: '',
      }
  }
  
  // 取 todo 的內容
  getNewValue (e) {
      const newText = e.target.value;
      
      this.setState({
          newText: newText,
      });
  }
  

  // 新增
  addTodo (e) {
      const {todos, newText, newId} = this.state;
      
      if (!newText) {
          e.preventDefault();
          return;
      }
      
      this.setState({
          todos: [
              ...todos,
              {id: newId, text: newText, completed: false}
          ],
          newId: newId +1,
          newText: '',
      });
  }

  // 刪除
  deleteTodo (id) {
      const {todos} = this.state;
      
      let newTodos = todos.filter((item) => item.id !== id);
      
      this.setState({
          todos: newTodos,
      });        
  }

  // 完成
  checkTodoToggle (id) {
      const {todos} = this.state;

      let newTodos = todos.map((item) => {
          if(item.id === id){
              item.completed = !item.completed;
          }
          return item;
      });
      
      this.setState({
          todos: newTodos,
      })
  }


  // 編輯
  saveEditedValue(id, value) {
      const {todos} = this.state;

      let newTodos = todos.map((item) => {
          if(item.id === id){
              item.text = value;
          }
          return item;
      });
      
      this.setState({
          todos: newTodos,
      })
  }
  


  render () {
      let {todos} = this.state;
      
      //console.log(todos)

      return (
          <div className="container">
              <header className="header__container">
                <ToDoTitle></ToDoTitle>
              </header>
              <div className="input-group mb-3">
                  <input type="text" className="form-control" id="input-add" placeholder="add a new todo"
                      value={this.state.newText}
                      onChange={(e) => this.getNewValue(e)} />
                  <span className="input-group-append">
                      <button
                          className="btn btn-outline-secondary"
                          onClick={(e) => this.addTodo(e)}
                      >Add</button>
                  </span>
              </div>
              <ul className="list-group list-group-flush">
                  {todos.map((todo) =>
                      <ToDoAddForm
                          key={todo.id}
                          todo={todo}
                          remove={(id) => this.deleteTodo(id)}
                          checkToggle={(id) => this.checkTodoToggle(id)}
                          saveEditedValue={(id, value) => this.saveEditedValue(id, value)}
                      />
                  )}
              </ul>
          </div>
      );
  }
}
// function App() {
//   return (
//     <div>{git()}</div>
//   );
// }

export default App;
