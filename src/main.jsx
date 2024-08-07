import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#d67a16',
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
                    <CssBaseline />
                    <App />
                </SnackbarProvider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
