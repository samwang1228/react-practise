import React from 'react';
class ToDoAddForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {output: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.equal = this.equal.bind(this);
    }
    equal()
    {
        this.state.output=this.state.value;
    }
    handleChange(event) {
    this.setState({value: event.target.value});
    }
    handleSubmit(event) {
    this.setState({value: event.target.value});
    event.preventDefault();
    }
    render() {
    return (
    <form onSubmit={this.handleSubmit}>
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    <input type="submit" value="Add" onClick={this.equal}/>
    <h2>{this.state.output}</h2>
    </form>
    );
    }
   }
export default ToDoAddForm