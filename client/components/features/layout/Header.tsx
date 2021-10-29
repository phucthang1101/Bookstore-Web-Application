import { AppBar, FormControlLabel, FormGroup, Toolbar, Typography } from '@mui/material';
import React from 'react'
import MaterialUISwitch from './MaterialUISwitch';

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}
const Header = ({ darkMode, handleThemeChange }: Props) => {
    return (
        <>
            <AppBar position='static' sx={{ mb: 4 }}>
                <Toolbar>
                    <Typography variant='h6'>
                        RE-STORE
                    </Typography>
                    <FormGroup>
                <FormControlLabel
                    checked={darkMode}
                    control={<MaterialUISwitch sx={{ m: 1 }} checked={darkMode} />}
                    label=""
                    onChange={handleThemeChange}
                    
                />
            </FormGroup>
                </Toolbar>
                
            </AppBar>

           
        </>
    )
}

export default Header;