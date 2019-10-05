import React, { Component, Fragment } from "react";
import Calc from "./layout/Calc";
import Mode from "./layout/Mode";

class Full extends Component {
	render() {
    return (
      <Fragment>
        <div className="col-md-6">
          <Calc />
        </div>
        <div className="col-md-3">
          <Mode />
        </div>
      </Fragment>  
    );
  }
}
 
export default Full