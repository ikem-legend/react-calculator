import React, { Component } from "react";
import { connect } from "react-redux";
import { LightMode, DarkMode } from "../components/AppMode";
import { lightTheme, darkTheme } from "../actions/themeActions";

class Mode extends Component {
  componentDidUpdate(prevProps) {
    // console.log(prevProps.theme)
    if (JSON.stringify(prevProps.theme) !== JSON.stringify(this.props.theme)) {
      if (!this.props.theme) {
        document.querySelector("body").classList.remove("white-bg")
        document.querySelector("body").classList.add("dark-bg")
      } else {
        document.querySelector("body").classList.remove("dark-bg")
        document.querySelector("body").classList.add("white-bg")
      }
    }
  }

	render() {
    return (
      <div className="container">
        <div className="row">
          <LightMode mode={this.props.light} />
          <DarkMode mode={this.props.dark} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    theme: state.theme.lightTheme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    light: (val) => dispatch(lightTheme(val)),
    dark: (val) => dispatch(darkTheme(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mode)