import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import team from "../assets/teampic.png";
import twitter from "../assets/TweetWhiz_icon.svg";
import convergent from "../assets/convergentlogo.svg";
import BackIcon from "../assets/Back-icon.svg";
import ErrorIcon from '@material-ui/icons/Error';
import "./Profile.css";

class Profile extends Component {
    handleSwitch = () => {
        this.props.history.push("./Dashboard");
      };

    componentDidMount() {
    document.getElementById("menu").style.display = "none";
    }

    componentWillUnmount() {
    document.getElementById("menu").style.display = "flex";
    }
    render() {
        return(
            <div>
                <div className="profile">
                <img className="back" src={BackIcon} onClick={this.handleSwitch} />
                <ErrorIcon id="error"></ErrorIcon>
                <h1>Work in Progress</h1>
                
                </div>
            </div>
            

        );
    }

  }
  export default withRouter(Profile);