import React from 'react';
import cx from 'classnames';
import styles from './TodoList.module.scss';

type TodoListProps = {
	todos: any[];
	onToggle(id: number): void;
	onRemove(id: number): void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
	return (
		<ul className={styles.todoContainer}>
			{todos.length === 0 && <h3>There are no todos to display</h3>}
			{todos.map((todo) => (
				<li className={styles.todo}>
					<input type='checkbox' checked={todo.completed} onChange={onToggle.bind(null, todo.id)} />
					<span className={todo.completed && styles.completed}>{todo.title}</span>
					<i onClick={() => onRemove(todo.id)}>delete</i>
				</li>
			))}
		</ul>
	);
};

export default TodoList;
