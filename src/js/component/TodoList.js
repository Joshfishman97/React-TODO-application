import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function TodoList(e) {
	state = {
		value: ""
	};
	return (
		<div className="headerAndTable">
			<ul>
				<h1>todos</h1>
				<input
					onKeyDown={e => this.setState({ value: e.target.value })}
					value={this.state.value}
				/>
				value = {this.state.value}
			</ul>

			{this.state.value}
		</div>
	);
}
