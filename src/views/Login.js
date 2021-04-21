import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import twitter from "../assets/Twitter_icon.svg";
import "./Login.css";

class Login extends Component {

    componentDidMount(){
        document.getElementById('nav').style.display = "none";
     }

     componentWillUnmount(){
        document.getElementById('nav').style.display = "flex";
     }

  render() {
    return (
      <div className="Login">
          <img className="logo" src={ twitter } />
          <h1>Welcome to Twit-Whiz!</h1>
        <Button 
            className="user" 
            type="button"
            onClick={(e) => {
                e.preventDefault();
                window.location.href="./Dashboard.js"
            }}>
          <p>Connect your User data</p>
        </Button>
        <Button 
            className="guest" 
            type="button"
            onClick={(e) => {
                e.preventDefault();
                window.location.href="./Dashboard.js"
            }}>
          <p>Continue as a Guest</p>
        </Button>
      </div>
    );
  }
}

export default Login