"use client"

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TestComponent from './components/test_component';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


export default function App() {
  return (
    <>
      <TestComponent /> 
    </>   
  );
}