import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Nav.css";

class Navigation extends Component {
  render() {
    return (
      <div id="menu">
        <Menu>
          <a id="placeholder" className="menu-item" href="/Dashboard">
            Dashboard
          </a>
          <a id="placeholder" className="menu-item" href="/Profile">
            Profile
          </a>
          <a id="placeholder" className="menu-item" href="/AboutUs">
            About Us
          </a>
          <a id="placeholder" className="menu-item" href="./">
            Log Out
          </a>
        </Menu>
      </div>
    );
  }
}

export default Navigation;
