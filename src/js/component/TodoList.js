import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function updateTodos(todos) {
	fetch("https://assets.breatheco.de/apis/fake/todos/user/JoshFishman97", {
		method: "PUT",
		body: JSON.stringify(
			todos.map(taskTitle => {
				return {
					label: taskTitle,
					done: false
				};
			})
		),
		headers: new Headers({
			"Content-Type": "application/json"
		})
	})
		.then(res => res.json())
		.then(function(response) {
			console.log("The response came in", response);
		});
}
export function TodoList() {
	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState("");
	React.useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/JoshFishman97")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setTodos(responseAsJson.map(x => x.label));
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);
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
								let newTodos = [...todos, input];
								setTodos(newTodos);
								setInput("");
								updateTodos(newTodos);
							}
						}}
					/>
				</li>
				{todos
					? todos.map((item, index) => {
							return (
								<li className="list-group-item" key={index}>
									{item}{" "}
									<button
										onClick={() => {
											const newTodos = todos.filter(
												(e, i) => {
													return i !== index;
												}
											);
											setTodos(newTodos);
											updateTodos(newTodos);
										}}
										className="float-right">
										<i className="fas fa-times"></i>
									</button>
								</li>
							);
					  })
					: "hello"}
				<p>{`${todos.length} items left`}</p>
			</ul>
		</div>
	);
}
