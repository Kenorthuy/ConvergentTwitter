import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchIcon from "../assets/Search-icon.svg";
import BackIcon from "../assets/Back-icon.svg";
import "./Search.css";

class Search extends Component {
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
    return (
      <div className="search">
          

          <div className="Searchbar">
            <img className="back" src={BackIcon} onClick={this.handleSwitch} />
            <form
            // action="#"
            // method="get"
            // onKeyPress={this.onKeyUp}
            >
              <input type="text" class="tweet-search" />
              {/* <img className="search" src={ search } /> */}
            </form>
          </div>
        <div className="results">
          <span className="h">Hashtag</span>
          <span className="i">Insights</span>
          <div className="hash">
            <p>Hashtag1</p>
          </div>
          <div className="hash">
            <p>Hashtag2</p>
          </div>
          <div className="hash">
            <p>Hashtag3</p>
          </div>
          <div className="hash">
            <p>Hashtag4</p>
          </div>
          <div className="hash">
            <p>Hashtag5</p>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Search);
