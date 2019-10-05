import React, { Component } from "react";
import { LightMode, DarkMode } from "../components/AppMode";

class Mode extends Component {
	render() {
    return (
      <div className="container">
        <div className="row">
          <LightMode />
          <DarkMode />
        </div>
      </div>
    );
  }
}

export default Mode