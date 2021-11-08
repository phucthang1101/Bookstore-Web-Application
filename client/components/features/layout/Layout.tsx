import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from "../../../redux/store";
import agent from '../../../utils/agent';
import { getCookie } from '../../../utils/cookies';
import { setBasket } from '../basket/BasketSlice';
import Header from './Header';

const Layout = (props: any) => {

	const dispatch = useAppDispatch();

	const [loading, setLoading] = useState(true);

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

	useEffect(() => {
		const buyerId = getCookie('buyerId');
		if (buyerId) {
			agent.Basket.get()
				.then(basket => dispatch(setBasket(basket)))
				.catch(error => console.log(error))
				.finally(() => setLoading(false))
		}
		else {
			setLoading(false)
		}
	}, [dispatch])

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
