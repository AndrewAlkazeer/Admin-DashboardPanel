import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
// import Wave from './Imgs/wave.svg';
import User from './Imgs/user.svg';
import Code from './Imgs/code.jpeg';
import Home from './home.js';

class App extends React.Component{
constructor(props){
  super(props);
}
render(){
  return(
    <Router>
    <React.Fragment>
    <div className="home-page-cont">
    <Route path="/home">
            <Home />
       </Route>
       </div>
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
<Link to="/home">Home</Link>
</div>

</React.Fragment>
</Router>
  );
}
}

export default App;
