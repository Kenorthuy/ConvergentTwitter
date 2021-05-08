import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { TextField, InputAdornment, IconButton, FormControl, Input, InputLabel} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import twitter from "../assets/TweetWhiz_icon.svg";
import "./Login.css";



const styles = {
  root: {
    background: "black"
  },
  input: {
    color: "#FFFFFF"
  }
};
class Login extends Component {

  state = {
    loginToTwitter: false
  }

    componentDidMount(){
        document.getElementById('menu').style.display = "none";
     }

     componentWillUnmount(){
        document.getElementById('menu').style.display = "flex";
     }
     
     

  render() {
   

    const { classes } = this.props;

    if(!this.state.loginToTwitter) {
      return (
        <div className="Login">
            <img className="logo" src={ twitter } />
            <h1>Welcome to Tweet-Whiz!</h1>
          <Button 
              className="user" 
              type="button"
              onClick={(e) => {
                  e.preventDefault();
                  this.setState({loginToTwitter: !this.state.loginToTwitter});
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

    if(this.state.loginToTwitter) {
      return (
        <div className="login-form">
          <img className="logo" src={ twitter } />
            <div className="forms">
              <div className="userInput">
                <TextField style={{width: '40%', margin: 20}} inputProps={{className: classes.input}} label="username or email" />
              </div>
              <div className="password">
                <TextField style={{width: '40%', margin: 20}} inputProps={{className: classes.input}} label="password" />
              </div>
            </div>
              

          <p id="forgot">Forgot password?</p>
          <Button
            className="loginUser"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href="./Dashboard"
            }}>
              <p>Login</p>
          </Button>
          <Button
            className="backButton"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href="./"
            }}>
              <p>Back</p>
          </Button>

        </div>
      );
    }

    
  }
}

export default withStyles(styles)(Login);