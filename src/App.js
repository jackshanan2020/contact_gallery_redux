import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Routes from './routes'
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";


//------------------------------------------------------------------------

export default function App() {

  const theme = createTheme({})
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
       <Routes/>
      </Router>
    </ThemeProvider>
  );
}
