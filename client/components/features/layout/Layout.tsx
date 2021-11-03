import React, { useState } from 'react';
import Header from './Header';
import { Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
//import Footer from './footer/footer';
import 'react-toastify/dist/ReactToastify.css';


const Layout = (props: any) => {
	//  console.log('layout')
	const [darkMode, setDarkMode] = useState(false);
	const paletteType = darkMode ? 'dark' : 'light';
	const theme = createTheme({
		palette: {
			mode: paletteType,
			background: {
				default: paletteType === 'light' ? '#eaeaea' : '#121212'
			}
		}
	})

	const handleThemeChange = () => {
		setDarkMode(!darkMode);
	}

	return (


		<ThemeProvider theme={theme}>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='colored'
			/>
			<CssBaseline />
			<Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
			{props.children}
		</ThemeProvider>


	);
};

export default Layout;
