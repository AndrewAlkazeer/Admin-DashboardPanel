import React, { Component } from 'react';
import './home.css';
import Profile from './Imgs/profile.svg';

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
    <div className="home-cont sm-visible">
    <div className="nav-cont">
    <img alt="Logo Image" className="Logo" />
      <h1>Dashboard</h1>
      <img src={Profile} alt="Profile Image" className="Profile-Img" />
    </div>
    <div className="main">
      <div className="brief-cont">
        <div className="brief-item" style={{background: 'lightpink'}}>
      <div className="brief-i-cont" style={{background: 'red'}, {width: '50px'}, {width: '50px'}}><i class="fa fa-facebook-official" aria-hidden="true"></i></div>
      <h1>Total Visitors {}</h1>
        </div>
        <div className="brief-item" style={{background: 'lightgreen'}}>
        <div className="brief-i-cont" style={{background: 'purple'}, {width: '50px'}, {width: '50px'}}><i class="fa fa-cog" aria-hidden="true"></i></div>
      <h1>Total Likes {}</h1>
        </div>
        <div className="brief-item" style={{background: 'lightblue'}}>
        <div className="brief-i-cont" style={{background: 'orange'}, {width: '50px'}, {width: '50px'}}><i class="fa fa-facebook-official" aria-hidden="true"></i></div>
      <h1>Total Emails {}</h1>
        </div>
      </div>
    </div>
    </div>
    </React.Fragment>
      );
    }
    }

    export default Home;