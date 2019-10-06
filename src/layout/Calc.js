import React, { Component } from "react";
import { connect } from "react-redux";
import Display from "../components/Display";
import Numbers from "../components/Numbers";
import Operands from "../components/Operands";
import { addOp } from "../actions/calcActions";
import { lightTheme } from "../actions/themeActions";

class Calc extends Component {
  constructor(props) {
    super()
    this.state = {
      calcNumbers: [],
      currNumber: 0,
      currOp: 0,
      total: 0
    }
    props.default()
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
    // if (!this.props.currTotal) {
      this.setState({
        ...this.state,
        currNumber: value,
        total: value
      });
    // }
  }

  execute = type => {
    const { currNumber, currOp } = this.state
    const { currTotal } = this.props
    // console.log(type)
    // console.log(this.props.currTotal)
    // console.log(currNumber + type)
    if (currOp !== 0) {
      console.log(type)
      // console.log(currOp[currOp.length-1])
      this.props.add(parseInt(currOp[0]), currNumber)
      // console.log(eval(`${currOp}${currNumber}`)) // eval is dangerous hence the choice to avoid it
      // Timeout is set to wait before checking for total to ensure that redux action has been carried out
      setTimeout(() => {
        if (currTotal) {
          console.log(currOp[currOp.length-1])
          this.setState({
            ...this.state,
            total: this.props.currTotal,
            currOp: currTotal + currOp[currOp.length-1] + currNumber + type,
            opHistory: currOp + currNumber + type
          },
          () => console.log(this.state.currOp));
        } else {
          this.setState({
            ...this.state,
            currOp: currOp + currNumber + type,
            opHistory: currOp + currNumber + type
          },
          () => console.log(this.state.currOp));
        }
      }, 500)
    } else {
      this.setState({
        ...this.state,
        currOp: currNumber + type
      });
    }
  }

  render() {
    const { calcNumbers, total } = this.state
    const { theme } = this.props
    let numberList = calcNumbers.map(number => <Numbers key={number} number={number} currNumber={this.currNumber} bg={theme} fc={theme} />)
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
                    backgroundColor: theme ? "#f0f0f0" : "#666",
                    border: "1px solid black",
                    color: theme ? "#000" : "#fff",
                  }}
                  className="col-md-4"
                >
                  <p className="">Clear</p>
                </div>
                <Numbers key={0} number={0} currNumber={this.currNumber} bg={theme} fc={theme} />
                <div 
                  style={{
                    padding: "5px",
                    backgroundColor: theme ? "#f0f0f0" : "#666",
                    border: "1px solid black",
                    color: theme ? "#000" : "#fff",
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
                <Operands execute={this.execute} bg={theme} fc={theme} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state)
  return {
    currTotal: state.calc.result,
    theme: state.theme.lightTheme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (val1, val2) => dispatch(addOp(val1, val2)),
    default: () => dispatch(lightTheme(true))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calc)