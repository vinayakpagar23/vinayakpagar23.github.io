import React, { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../ContextProvider/ThemeContext';
import styles from './Navbar.module.css';

const barStyle = {
	bar1: {
		position: 'absolute',
		width: '15px',
		 transform: 'rotate(45deg)',
	},
	bar2: {
		position: 'absolute',
		left: '-2px',
	},
	bar3: {
		position: 'absolute',
		width: '15px',
		 transform: 'rotate(-45deg)',
	},
};

const circle = {
	background: 'linear-gradient(40deg, #8983F7, #1c2931 70%)',
};
const cresent = {
	 transform: 'scale(1)',
};
const Navbar = () => {
	// const [preScrollPos, setPreScrollPos] = useState(
	// 	window.pageYOffset,
	// );
	const navRef = useRef();

	const { newTheme, mode, handleMode, open, handleMenu } =
		useContext(ThemeContext);

	// window.onscroll = () => {
	// 	let currentScrollPos = window.pageYOffset;
	// 	if (preScrollPos > currentScrollPos) {
	// 		navRef.current.style.top = '0';
	// 	} else {
	// 		navRef.current.style.top = '-80px';
	// 	}
	// 	setPreScrollPos(currentScrollPos);
	// };
	const handleResume = () => {
		fetch("Vinayak_Pagar_Resume_.pdf").then((res) => {
		  res.blob().then((blob) => {
			const fileUrl = window.URL.createObjectURL(blob);
			let file = document.createElement("a");
			file.href = fileUrl;
			file.download = "Vinayak_Pagar_Resume_.pdf";
			file.click();
		  });
		});
	  };

	return (
		<nav
			ref={navRef}
			className={styles.navContainer}
			style={{
				background: `${newTheme.background}`,
				boxShadow: `3px 3px 10px ${newTheme.line}`,
			}}
			id='nav-menu'
		>
			<div className={styles.navbar}>
			
			<a  href='#'>
					<div className={styles.logo}>
						<img
							src='https://t4.ftcdn.net/jpg/01/01/51/09/360_F_101510953_hYf4T5StHuKhpzL4GrrtObaWSgjquX3S.jpg'
							alt='Logo'
						/>
					</div>
				</a>
				

				<div
					style={{ color: `${newTheme.title}` }}
					className={styles.links}
				>
					
					<a className='nav-link home' href='#home'>Home</a>
					<a className='nav-link about' href='#about'>About</a>
					<a className='nav-link skills' href='#techStacks'>Proficiencies</a>
					<a className='nav-link projects' href='#projects'>Projects</a>

					<a className='nav-link contact' href='#contact'>Contact</a>
					<a className='nav-link resume' download href='https://drive.google.com/file/d/1_ss25ojiYkEHimq7sfoC_3wlwTnvDie1/view?usp=sharing' id="resume-button-1" target="_blank"
              rel="noreferrer" onClick={handleResume}>Resume</a>
					
				</div>
				<button
					aria-label={mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
					title={
						mode === 'dark' ? 'Toggle Light Mode' : 'Toggle Dark Mode'
					}
					style={{ color: `${newTheme.title}` }}
					className={styles.modeButton}
					onClick={handleMode}
				>
					<div
						className={styles.circle}
						style={mode === 'light' ? circle : {}}
					>
						<div
							style={mode === 'light' ? cresent : {}}
							className={styles.crescent}
						></div>
					</div>
				</button>

				<div onClick={handleMenu} className={styles.bars}>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar1
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar2
						}
					></div>
					<div
						style={
							open
								? { background: `${newTheme.title}` }
								: barStyle.bar3
						}
					></div>
				</div>
			</div>
		</nav>
		
	);
};

export default Navbar;
