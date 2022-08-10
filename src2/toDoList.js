import ToDoTitle from './toDoTitle';
import ToDoAddForm from './todoadd';
import React from 'react';
var todoItems = [];
class TodoApp extends React.Component {
 constructor (props) {
 super(props);

 }
 addItem(todoItem) {

 }
 removeItem (itemIndex) {

 }
 TodoDone(itemIndex) {
 }
 render() {
 return (
 <div id="main">
 <ToDoTitle />
 <ToDoAddForm />

 </div>
 );
 }
}
const out=()=>{
    var output=[];
    output.push(<TodoApp>ok</TodoApp>)
    return output;
   } 
export default out;