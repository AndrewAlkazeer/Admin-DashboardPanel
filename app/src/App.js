import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wave from './Imgs/wave.svg';
import User from './Imgs/user.svg';
import Code from './Imgs/code.jpeg';
class App extends React.Component{
constructor(props){
  super(props);
}
render(){
  return(
<React.Fragment>
<div className="nav-cont">
</div>
<img className="bg-img" src={Code} alt="background image" />
<div className="login-cont">
<img src={User} alt="Login Photo" />
<h1>Welcome</h1>
<form className="login-form" action="/login" method="POST">
<input type="text" name="User" placeholder="User Name" required />
<input type="password" name="Password" placeholder="Password" required />
<button type="submit">LOGIN
<div className="login-btn-div-1"></div>
<div className="login-btn-div-2"></div>
</button>
</form>
</div>
</React.Fragment>
  );
}
}

export default App;
