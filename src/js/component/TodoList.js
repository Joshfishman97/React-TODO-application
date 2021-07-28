import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function TodoList() {
	const [todos, setTodos] = useState(["your todos", "Eat", "Sleep", "Drink"]);
	const [input, setInput] = useState("");
	return (
		<div className="headerAndTable text-center">
			<h1>todos</h1>
			<ul className="list-group">
				<li className="list-group-item">
					<input
						placeholder="What needs to be done?"
						value={input}
						onChange={e => setInput(e.target.value)}
						onKeyUp={e => {
							if (e.keyCode === 13 && input !== "") {
								setTodos([...todos, input]);
								setInput("");
							}
						}}
					/>
				</li>
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
				<p>{`${todos.length} items left`}</p>
			</ul>
		</div>
	);
}
