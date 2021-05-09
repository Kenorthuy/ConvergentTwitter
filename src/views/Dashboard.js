import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import search from "../assets/Search-icon.svg";
import graph from "../assets/Engagement-graph.svg"
import "./Dashboard.css";
class Dashboard extends Component {
  handleSwitch = () => {
    this.props.history.push("./Search");
  };

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
          <div className="phrases a">
            <div className="header">
              <p>Key phrases</p>
            </div>
            <ul>
              <li>
                <p>RIP Bo</p>
              </li>
              <li>
                <p>Sam Houston</p>
              </li>
              <li>
                <p>Plano</p>
              </li>
            </ul>
          </div>
          <div className="hashtags a">
            <div className="header">
              <p>Key hashtags</p>
            </div>
            <ul>
              <li>
                <p>#COVID</p>
              </li>
              <li>
                <p>#MothersDay</p>
              </li>
              <li>
                <p>#BlackFaeDay</p>
              </li>
            </ul>
          </div>
          <div className="engagement a">
            <div className="header">
              <p>Engagement</p>
            </div>
            <img src={ graph } />
          </div>
      </div>
    );
  }
}
export default withRouter(Dashboard);
