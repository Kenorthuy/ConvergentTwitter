import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import twitter from "../assets/Twitter_icon.svg";
import "./Login.css";

class Login extends Component {

    componentDidMount(){
        document.getElementById('menu').style.display = "none";
     }

     componentWillUnmount(){
        document.getElementById('menu').style.display = "flex";
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
                window.location.href="./Dashboard"
            }}>
          <p>Connect your User data</p>
        </Button>
        <Button 
            className="guest" 
            type="button"
            onClick={(e) => {
                e.preventDefault();
                window.location.href="./Dashboard"
            }}>
          <p>Continue as a Guest</p>
        </Button>
      </div>
    );
  }
}

export default Login