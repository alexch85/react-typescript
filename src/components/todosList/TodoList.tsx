import React from 'react';

type TodoListProps = {
	todos: any[];
};

const todoList: React.FC<TodoListProps> = ({ todos }) => {
	return (
		<ul>
			{todos.map((todo) => (
				<li>
					<input type='checkbox' />
					<span></span>
					<i>delete</i>
				</li>
			))}
		</ul>
	);
};

export default todoList;
