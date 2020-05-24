import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wave from './Imgs/wave.svg';
import User from './Imgs/user.svg';

class App extends React.Component{
constructor(props){
  super(props);
}
render(){
  return(
<React.Fragment>
<div className="nav-cont">
</div>
<img src={Wave} alt="Wave img" />
<div className="login-cont">
<img src={User} alt="Login Photo" />
<h1>Welcome</h1>
<form className="login-form" action="/login" method="POST">
<input type="text" name="User" placeholder="User Name" />
<input type="password" name="Password" placeholder="Password" />
<button type="submit">Login</button>
</form>
</div>
</React.Fragment>
  );
}
}

export default App;
