"use client"

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


export default function App() {
  return (
    <>
      <h3>main page</h3>
    </>   
  );
}