import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import team from "../assets/teampic.png";
import twitter from "../assets/TweetWhiz_icon.svg";
import convergent from "../assets/convergentlogo.svg";
import BackIcon from "../assets/Back-icon.svg";
import "./AboutUs.css";

class AboutUs extends Component {
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
                <div className="about">
                <img className="back" src={BackIcon} onClick={this.handleSwitch} />
                <div className="logos">
                    <img className="logo" src={ twitter } />
                    <img className="convergent" src={ convergent } />
                </div>
                
                <h1>About Us</h1>
                <p>Hi! We are the Twitter Analysis subteam of the Convergent Data Analysis Build Team.</p>
                <p>We decided to create this product to explore the Twitter API to see what we are capable given
                    the information that is given through the API, and found a lot of neat things!
                </p>
                <p>
                    Using the Twitter API, we were able to clean the data from the API calls to gather insights and present
                    important patterns and correlations to users. In the future, we plan to use advanced techniques such as
                    Natural Language Processing and Machine Learning to make the app make the key insights for the user!
                </p>
                <img className="teampic" src={ team } />
                </div>
            </div>
            

        );
    }

  }
  export default withRouter(AboutUs);