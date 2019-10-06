import React from "react";

export const LightMode = (props) => {
  // render() {
    return (
      <div className="col-md-6" onClick={() => {props.mode(true)}}>
        <button>Light Theme</button>
      </div>
    );
  // }
}

export const DarkMode = (props) => {
	// render() {
    return (
      <div className="col-md-6" onClick={() => {props.mode(false)}}>
        <button>Dark Theme</button>
      </div>
    );
  // }
}
