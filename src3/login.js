import React from "react";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
class Header extends React.Component {
    style1 = {
		padding: '5px',
        // border: 'none',
        // border:'1px',
        borderRadius : '5px',
        margin: '12px',
	}; 
	style2 = {
		
        position: 'fixed',
        bottom:  '200px',
        right: '40%',
        width: '250px',
        height: '300px', 
        background: 'rgb(255, 255, 255)',
        border: '1px solid #333',
        padding: '12px',
        textAlign: 'center',
        borderRadius : '5px',
        boxShadow: '0 0 10px rgba(0,0,0,1.00)'
	};		
	style3 = {
		backgroundColor :'rgb(41, 36, 33)',
	 };		
  
  render() {
    // const Navigate=useNavigate();
    function fuckcj() {
        useNavigate('/about');
    }
    return (
        
        <div>
        <div style={this.style3} >
        
		<form  >
			<div style={this.style2}>
            <h1>CGU login</h1>
            <label >
                帳號
                <input type="text" name="name" style={this.style1} />
            </label>
                <div>
                <label>
                    密碼
                </label>
                <input type="password"  style={this.style1} />
                </div>
                <div>
            <input type="submit" value="登入" />
            <Button onClick={fuckcj}>text</Button>
            <Button><Link to={'/about'}> next</Link></Button>
                </div>
			</div>
		</form>
        </div>
        </div>
    );
  }
}

export default Header;