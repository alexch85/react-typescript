import React from 'react';
import Navbar from '../components/navbar/Navbar';
import styles from './Styles.module.scss';

const App: React.FC = () => {
	return (
		<div className={styles.app}>
			<Navbar />
			<h1>Welcome to react app</h1>
		</div>
	);
};

export default App;
