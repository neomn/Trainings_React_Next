"use client";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Table from "@/app/components/Table";
import { Box, Container } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: 'rgb(213, 213, 213)'
    }
  },
});

export default function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />


        <Box sx={{ mt: 4 }}>
          <Table/>
        </Box>
      </ThemeProvider>
    </>   
  );
}