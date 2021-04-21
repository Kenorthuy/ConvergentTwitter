import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Nav.css";

class Navigation extends Component {
  render() {
    return (
      <div id="menu">
        <Menu>
          <a id="profile" className="menu-item" href="/">
            Profile
          </a>
          <a id="about" className="menu-item" href="/">
            About
          </a>
          <a id="placeholder" className="menu-item" href="/">
            Placeholder
          </a>
        </Menu>
      </div>
    );
  }
}

export default Navigation;
