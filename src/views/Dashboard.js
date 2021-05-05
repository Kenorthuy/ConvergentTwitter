import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import search from "../assets/Search-icon.svg";
import "./Dashboard.css";
class Dashboard extends Component {
  handleSwitch = () => {
    this.props.history.push("./Search")
  }
  
  render() {

    return (
      <div className="dashboard">
        			
        <div className="Searchbar">
                <form 
                // action="#" 
                // method="get" 
                // onKeyPress={this.onKeyUp}
                >
                    <input
                        type="text"
                        class="tweet-search"
                        onClick={this.handleSwitch}
                    />
                    {/* <img className="search" src={ search } /> */}
                </form>
        </div>
        <div>
        <div className="phrases a"><p>phrases</p></div>
        <div className="hashtags a"><p>hashtags</p></div>
        <div className="engagement a"><p>engagement</p></div>
        </div>
      </div>
    );
  }
}
export default withRouter(Dashboard);
