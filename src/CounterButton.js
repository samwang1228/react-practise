import ReactDOM from "react-dom";
import React from "react";

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ counter: this.state.counter + 1 });
    console.log(this.state);
  }
  render() {
    var text = this.state.counter;

    return <button onClick={this.handleClick}>你點了{text}次.</button>;
  }
}
export default CounterButton;
//  ReactDOM.render(
//      <CounterButton/>,
//   document.getElementById('root'));
