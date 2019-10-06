import React, { Component, Fragment } from "react";

class Numbers extends Component {
	useNumber = () => {
		const { number } = this.props
		this.props.currNumber(number)
	}

	render() {
		const { number, bg, fc } = this.props
		return (
			<Fragment>
				<div 
					style={{
						// display: "flex",
						// flexDirection: "row",
						// justifyContent: "center",
						padding: "5px",
						backgroundColor: bg ? "#f0f0f0" : "#666",
						border: "1px solid black",
						color: fc ? "#000" : "#fff",
					}}
					className="col-md-4"
          onClick={this.useNumber}
				>
					<p>{number}</p>
				</div>
			</Fragment>
		);
	}
}

export default Numbers