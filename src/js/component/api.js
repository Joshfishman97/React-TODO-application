export function updateTodos(todos) {
	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/JoshFishman97",
		{
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
		}
	);
}

export function createTodos(todos) {
	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/JoshFishman97",
		{
			method: "POST",
			body: JSON.stringify([]),
			headers: new Headers({
				"Content-Type": "application/json"
			})
		}
	);
}
export function getTodos() {
	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/JoshFishman97"
	);
}
