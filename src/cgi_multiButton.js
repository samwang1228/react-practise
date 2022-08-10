// import Button from '@material-ui/core/Button'
import CounterButton from "./CounterButton";
import Button from "react-bootstrap/Button";
const MultiButton = (num) => {
  var output = [];
  for (let i = 1; i < num + 1; ++i) output.push(<Button></Button>);
  output.push(<CounterButton>第{i}個按鍵</CounterButton>);
  return output;
};
//    const changeText=(event)=>{
//     console.log(event.target)
//     event.target.innerText = event.target.innerText + "被點了"
//    }
//    const multiButton=(num)=>{
//     var output=[];
//     for(let i=1;i<num+1;++i)
//     output.push(<Button  variant="contained" color="primary" onClick={changeText}>第{i}個按鍵</Button>)
//     return output;
//    }
export default MultiButton;
