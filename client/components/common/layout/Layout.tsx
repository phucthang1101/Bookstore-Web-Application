import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useCallback, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from "../../../redux/store";
import { fetchCurrentUser } from '../../features/account/accountSlice';
import { fetchBasketAsync } from '../../features/basket/BasketSlice';
import Header from './Header';

const Layout = (props: any) => {

	const dispatch = useAppDispatch();

	const [loading, setLoading] = useState(true);

	const initApp = useCallback(async () => {
		try {
			await dispatch(fetchCurrentUser());
			await dispatch(fetchBasketAsync());
		} catch (error) {
			console.log(error);
		}
	},[dispatch])

	useEffect(() => {
		initApp().then(() => setLoading(false));
	  }, [initApp])
	  
	
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
