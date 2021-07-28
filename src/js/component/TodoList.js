import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function TodoList() {
	const [todos, setTodos] = useState(["your todos", "Eat", "Sleep", "Drink"]);
	const [input, setInput] = useState("");
	return (
		<div className="headerAndTable text-center">
			<h1 className="text-secondary">todos</h1>
			<input
				value={input}
				onChange={e => setInput(e.target.value)}
				onKeyUp={e => {
					if (e.keyCode === 13 && input !== "") {
						setTodos([...todos, input]);
						setInput("");
					}
				}}
			/>
			<ul className="list-group">
				{todos.map((item, index) => {
					return (
						<li className="list-group-item" key={index}>
							{item}{" "}
							<button
								onClick={() => {
									const newTodos = todos.filter((e, i) => {
										return i !== index;
									});
									setTodos(newTodos);
								}}
								className="float-right">
								<i className="fas fa-times"></i>
							</button>
						</li>
					);
				})}
				{`${todos.length} items left`}
			</ul>
		</div>
	);
}
