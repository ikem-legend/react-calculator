import React, { Component } from "react";
import { connect } from "react-redux";
import Display from "../components/Display";
import Numbers from "../components/Numbers";
import Operands from "../components/Operands";
import { addOp } from "../actions/calcActions";

class Calc extends Component {
  constructor() {
    super()
    this.state = {
      calcNumbers: [],
      currNumber: 0,
      currOp: 0,
      total: 0
    }
  }

  componentDidMount() {
    this.generateNumbers()
  }

  generateNumbers = () => {
    let calcNumbers = []
    for (let i=1; i<=9; i++) {
      calcNumbers.push(i)
    }
    this.setState({
      ...this.state,
      calcNumbers
    });
  }

  currNumber = value => {
    console.log(value)
    this.setState({
      ...this.state,
      currNumber: value,
      total: value
    });
  }

  execute = type => {
    // console.log(type)
    // console.log(this.props.currTotal)
    const { currNumber, currOp } = this.state
    // console.log(currNumber + type)
    if (this.props.currTotal) {
      this.setState({
        ...this.state,
        total: this.props.currTotal
      });
    }
    if (currOp !== 0) {
      // console.log(currOp[0])
      this.props.add(parseInt(currOp[0]), currNumber)
      // console.log(eval(`${currOp}${currNumber}`))
      let newResult = parseInt(currOp) + currOp[1] + parseInt(currNumber)
      console.log(newResult)
      this.setState({
        ...this.state,
        currOp: currOp + currNumber + type
      },
      () => console.log(this.state.currOp));
    } else {
      this.setState({
        ...this.state,
        currOp: currNumber + type
      });
    }
  }

  render() {
    const { calcNumbers, total } = this.state
    let numberList = calcNumbers.map(number => <Numbers key={number} number={number} currNumber={this.currNumber} />)
    return (
      <div 
        className="container"
        style={{
          border: "1px solid #000",
          padding: 0
        }}
      >
        {/*<div style={{ flexDirection: "row", display: "flex" }}>*/}
        <div className="row no-gutters">
          <Display total={total} />
        </div>
        <div className="row no-gutters">
          <div className="col-md-9">
            <div className="container">
              <div className="row">
                {numberList}
                <div 
                  style={{
                    padding: "5px",
                    backgroundColor: "#e5e5e5",
                    border: "1px solid black"
                  }}
                  className="col-md-4"
                >
                  <p className="">Clear</p>
                </div>
                <Numbers key={0} number={0} currNumber={this.currNumber} />
                <div 
                  style={{
                    padding: "5px",
                    backgroundColor: "#e5e5e5",
                    border: "1px solid black"
                  }}
                  className="col-md-4"
                >
                  <p className="">=</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="container">
              <div className="row">
                <Operands execute={this.execute} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currTotal: state.calc.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (val1, val2) => dispatch(addOp(val1, val2))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calc)