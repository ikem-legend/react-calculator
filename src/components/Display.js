import React, { Component } from "react";

class Display extends Component {
	render() {
		const { total } = this.props
		return (
			<div 
				style={{
					// display: "flex",
					justifyContent: "right",
					minWidth: "120px",
					padding: "5px",
					backgroundColor: "#fff",
					flex: 1
				}}
			>
				<span className="float-right">{total}</span>
			</div>
		);
	}
}

export default Display