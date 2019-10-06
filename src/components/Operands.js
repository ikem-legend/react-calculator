import React, { Component, Fragment } from "react";

class Operands extends Component {
  add = () => {
    // console.log("Add")
    this.props.execute("+")
  }
  
  subtract = () => {
    // console.log("Subtract")
    this.props.execute("-")
  }
  
  multiply = () => {
    // console.log("Multiply")
    this.props.execute("*")
  }
  
  divide = () => {
    // console.log("Divide")
    this.props.execute("/")
  }

	render() {
    const { bg, fc } = this.props
    return (
      <Fragment>
        <div 
          style={{
            padding: "5px",
            backgroundColor: bg ? "#f0f0f0" : "#666",
            border: "1px solid black",
            color: fc ? "#000" : "#fff"
          }}
          className="col-md-12"
          onClick={this.add}
        >
          <p>Add (+)</p>
        </div>
        <div 
          style={{
            padding: "5px",
            backgroundColor: bg ? "#f0f0f0" : "#666",
            border: "1px solid black",
            color: fc ? "#000" : "#fff"
          }}
          className="col-md-12"
          onClick={this.subtract}
        >
          <p>Subtract (-)</p>
        </div>
        <div 
          style={{
            padding: "5px",
            backgroundColor: bg ? "#f0f0f0" : "#666",
            border: "1px solid black",
            color: fc ? "#000" : "#fff"
          }}
          className="col-md-12"
          onClick={this.multiply}
        >
          <p>Multiply (*)</p>
        </div>
        <div 
          style={{
            padding: "5px",
            backgroundColor: bg ? "#f0f0f0" : "#666",
            border: "1px solid black",
            color: fc ? "#000" : "#fff"
          }}
          className="col-md-12"
          onClick={this.divide}
        >
          <p>Divide (/)</p>
        </div>
      </Fragment>
    );
  }
}

export default Operands