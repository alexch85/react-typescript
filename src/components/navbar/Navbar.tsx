import React from 'react';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => (
	<div className={styles.navbar}>
		<h1>React + Typescript</h1>
		<div className={styles.navItems}>
			<li>
				<a href='/'>To do List</a>
			</li>
			<li>
				<a href='/'>info</a>
			</li>
		</div>
	</div>
);

export default Navbar;
