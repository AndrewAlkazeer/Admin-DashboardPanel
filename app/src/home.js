import React, { Component } from 'react';
import './home.css';

class Home extends React.Component{
    constructor(props){
      super(props);
    }
    render(){

    var delayRedirect = () =>{
      setTimeout(()=>{

      }, 1000);
    }

      return(
    <React.Fragment>
    <div className="home-cont">
    <div className="nav-cont">
</div>
    <h1>hello there!</h1>
    </div>
    </React.Fragment>
      );
    }
    }

    export default Home;