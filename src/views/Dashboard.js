import React, { Component, Fragment, useState } from 'react';
import search from "../assets/Search-icon.svg";
import "./Dashboard.css";
class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      name: "Key Enter Event",
    };
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(event) {
    if (event.charCode === 13) {
      this.setState({ inputValue: event.target.value })
    }
  }

  toggleClass() {
    var nav = document.getElementById('menu')
    nav.classList.toggle("hidden")

    var search = document.querySelector(".results")
    search.classList.toggle("hidden");
    
    var list = document.querySelectorAll(".a")
    for (var i = 0; i < list.length; i++) {
      list[i].classList.toggle("hidden")
    }

    
  }
  
  
  render() {

    return (
      <div className="dashboard">
        			
        <div className="Searchbar">
                <form action="#" method="get" onKeyPress={this.onKeyUp}>
                    <input
                        type="text"
                        class="tweet-search"
                        onClick={this.toggleClass}
                    />
                    {/* <img className="search" src={ search } /> */}
                </form>
        </div>
        <div>
        <div className="results hidden">
          {/* <p>Hashtag</p>
          <span>Insight</span> */}
          <div className="hash"><p>Hashtag1</p></div>
          <div className="hash"><p>Hashtag2</p></div>
          <div className="hash"><p>Hashtag3</p></div>
          <div className="hash"><p>Hashtag4</p></div>
          <div className="hash"><p>Hashtag5</p></div>
        </div>
        <div className="phrases a"><p>phrases</p></div>
        <div className="hashtags a"><p>hashtags</p></div>
        <div className="engagement a"><p>engagement</p></div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
