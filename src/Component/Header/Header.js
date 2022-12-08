import React from 'react'
import './Header.css'
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';



const Header = ({ input, setInput }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            },
            mode: 'dark',
        },
    });

    return (
        <div className='header'>
            <span className='title'>{input ? input : "Word Finder"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className='search'
                        id="standard-basic" label="Search Your Word" variant="standard"
                        value={input}
                        onChange={(e) => { setInput(e.target.value) }} />
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header