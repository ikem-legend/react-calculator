import React, { Component, Fragment } from "react";

class Numbers extends Component {
	useNumber = () => {
		const { number } = this.props
		this.props.currNumber(number)
	}

	render() {
		const { number } = this.props
		return (
			<Fragment>
				<div 
					style={{
						// display: "flex",
						// flexDirection: "row",
						// justifyContent: "center",
						// minWidth: "30px",
						// width: "130px",
						padding: "5px",
						backgroundColor: "#e5e5e5",
						border: "1px solid black"
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