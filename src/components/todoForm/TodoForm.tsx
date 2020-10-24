import React, { useRef } from 'react';
import styles from './TodoForm.module.scss';

interface TodoFormProps {
	addTodo(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
	const ref = useRef<HTMLInputElement>(null);
	// const [title, setTitle] = useState<string>('');

	// const setTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setTitle(event.target.value);
	// };

	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			addTodo(ref.current!.value);
			ref.current!.value = '';
			// console.log(title);
			// setTitle('');
		}
	};

	return (
		<div className={styles.inputContainer}>
			<label htmlFor='title' />
			<input
				type='text'
				// value={title}
				id='title'
				placeholder='Add task'
				onKeyPress={keyPressHandler}
				// onChange={setTitleHandler}
				ref={ref}
			/>
		</div>
	);
};

export default TodoForm;
