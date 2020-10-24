import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import TodoForm from '../components/todoForm/TodoForm';
import styles from './Styles.module.scss';

const App: React.FC = () => {
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (title: string) => {
		console.log('Add new Todo', title);
	};
	return (
		<div className={styles.app}>
			<Navbar />
			<TodoForm addTodo={addTodoHandler} />
		</div>
	);
};

export default App;
