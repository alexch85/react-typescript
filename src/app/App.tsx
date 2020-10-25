import { ITabUserOptions } from '@testing-library/user-event';
import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import TodoForm from '../components/todoForm/TodoForm';
import TodoList from '../components/todosList/TodoList';
import { ITodo } from '../interfaces';
import styles from './Styles.module.scss';

const App: React.FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	const addTodoHandler = (title: string) => {
		const newTodo = {
			title,
			id: Date.now(),
			completed: false,
		};
		setTodos((prevTodos) => [newTodo, ...prevTodos]);
	};

	const toggleHandler = (id: number) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	};

	const removeHandler = (id: number) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	return (
		<div className={styles.app}>
			<Navbar />
			<TodoForm addTodo={addTodoHandler} />
			<TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
		</div>
	);
};

export default App;
