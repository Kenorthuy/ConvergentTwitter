import React, { Component } from 'react'
import "./Dashboard.css";
class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="phrases">phrases</div>
        <div className="hashtags">hashtags</div>
        <div className="engagement">engagement</div>
      </div>
    );
  }
}
export default Dashboard;
