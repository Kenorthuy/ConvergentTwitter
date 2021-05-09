import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SearchIcon from "../assets/Search-icon.svg";
import BackIcon from "../assets/Back-icon.svg";
import barGraph from "../assets/bar.PNG";
import scatterGraph from "../assets/scatter.PNG";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      // tweet: {tweet_text: [], likes: [], retweets: []}
      data: [
        "#COVID",
        "#MothersDay",
        "#BlackFaeDay",
        "#ChineseRocket",
        "#ReasonsToStillWearAMask",
      ],
    };
  }

  handleSwitch = () => {
    this.props.history.push("./Dashboard");
  };

  componentDidMount() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("graph-data1").style.display = "none";
    document.getElementById("graph-data2").style.display = "none";
  }

  componentWillUnmount() {
    document.getElementById("menu").style.display = "flex";
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.getSearch();
    }
  };

  getSearch = (e) => {
    var jsondata;
    fetch("covid_recent.json", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        // this.setState({ tweet_data: myJson[0] })
        console.log(myJson);
      })
      .catch(console.log);

    document.getElementById("graph-data1").style.display = "flex";
    document.getElementById("graph-data2").style.display = "flex";
    document.getElementById("results").style.display = "none";
    document.getElementById("hash1").style.display = "none";
    document.getElementById("hash2").style.display = "none";
    document.getElementById("hash3").style.display = "none";
    document.getElementById("hash4").style.display = "none";
    document.getElementById("hash5").style.display = "none";
    document.getElementById("hash6").style.display = "none";
    document.getElementById("hash7").style.display = "none";
  };
  // useEffect(() => {
  //   getSearch()
  // },[])

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
            <input
              type="text"
              class="tweet-search"
              value={this.state.search}
              onChange={this.handleSearch}
              onKeyPress={this.handleKeyPress}
            />
            {/* <img className="search" src={ search } /> */}
          </form>
        </div>
        <div className="results">
          <span className="h" id="hash6">Hashtag</span>
          <span className="i" id="hash7">Insights</span>
          <div className="hash" id="hash5">
            <p>{this.state.data[0]}</p>
          </div>
          <div className="hash" id="hash1">
            <p>{this.state.data[1]}</p>
          </div>
          <div className="hash" id="hash2">
            <p>{this.state.data[2]}</p>
          </div>
          <div className="hash" id="hash3">
            <p>{this.state.data[3]}</p>
          </div>
          <div className="hash" id="hash4">
            <p>{this.state.data[4]}</p>
          </div>
          <img src={barGraph} id="graph-data1" />
          <img src={scatterGraph} id="graph-data2" />
        </div>
      </div>
    );
  }
}
export default withRouter(Search);
