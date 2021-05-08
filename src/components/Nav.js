import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import "./Nav.css";

class Navigation extends Component {
  render() {
    return (
      <div id="menu">
        <Menu>
          <a id="placeholder" className="menu-item" href="">
            Analytics
          </a>
          <a id="placeholder" className="menu-item" href="">
            Log Out
          </a>
          <a id="placeholder" className="menu-item" href="">
            About Us
          </a>
        </Menu>
      </div>
    );
  }
}

export default Navigation;
