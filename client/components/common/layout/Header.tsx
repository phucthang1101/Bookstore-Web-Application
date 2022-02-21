import { AppBar, Badge, FormControlLabel, FormGroup, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material';
import React from 'react'
import MaterialUISwitch from './MaterialUISwitch';
import Link from 'next/link'
import { ShoppingCart } from '@mui/icons-material';
import styles from './Header.module.css';
import { Box } from '@mui/system';
import { useAppSelector } from '../../../redux/store';
import UserMenu from './UserMenu';
import Navbar from './navbar/Navbar';

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}
//interface Ref = HTMLDivElement;

const Header = ({ darkMode, handleThemeChange }: Props) => {
    const { basket } = useAppSelector(state => state.basket)

    const { user } = useAppSelector(state => state.account)
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);


    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        };
    });

    const [isSticky, setSticky] = React.useState(false);

    //const stickyRef = React.useRef(null);
    const handleScroll = () => {
        window.pageYOffset > 300
        ? setSticky(true)
        : setSticky(false);
    };

    const debounce = (func: Function, wait = 20, immediate = true) => {
        let timeOut: any;
        return function (this: any) {
            let context = this,
                args = [].slice.call(arguments);
            const later = () => {
                timeOut = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeOut;
            clearTimeout(timeOut);
            timeOut = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };




    return (
        <>
            <Navbar />
            <AppBar
                className={`${isSticky ? styles.navbar_sticky: styles.navbar_unstick}`}
                sx={{ mb: 4 }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Link href="/">
                            <Typography variant='h6'>
                                RE-STORE
                            </Typography>
                        </Link>
                        <FormGroup>
                            <FormControlLabel
                                checked={darkMode}
                                control={<MaterialUISwitch sx={{ m: 1 }} checked={darkMode} />}
                                label=""
                                onChange={handleThemeChange}
                            />
                        </FormGroup>
                    </Box>


                    <List sx={{ display: 'flex' }}>

                        <ListItem sx={{ color: 'inherit', typography: 'h6' }}>
                            <Link href="/about">
                                <a className={styles['nav-link']}>About</a>
                            </Link>
                        </ListItem>
                        <ListItem sx={{ color: 'inherit', typography: 'h6' }}>
                            <Link href="/contact">
                                <a className={styles['nav-link']}>Contact</a>
                            </Link>
                        </ListItem>
                        <ListItem sx={{ color: 'inherit', typography: 'h6' }}>
                            <Link href="/products">
                                <a className={styles['nav-link']}>Products</a>
                            </Link>
                        </ListItem>
                    </List>


                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton href='/basket' size="large" sx={{ color: 'inherit' }}>
                            <Badge badgeContent={itemCount} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                        {user ? (
                            <UserMenu />
                        ) : (
                            <List sx={{ display: 'flex' }}>
                                <ListItem sx={{ color: 'text.secondary', typography: 'h6' }}>
                                    <Link href="/login">
                                        <a className={styles['nav-link']}>Login</a>
                                    </Link>
                                </ListItem>
                                <ListItem sx={{ color: 'text.secondary', typography: 'h6' }}>
                                    <Link href="/register">
                                        <a className={styles['nav-link']}>Register</a>
                                    </Link>
                                </ListItem>

                            </List>
                        )}

                    </Box>

                </Toolbar>

            </AppBar>


        </>
    )
}

export default Header;