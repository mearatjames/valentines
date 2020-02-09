import React from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import ButtonAppBar from './components/AppBar'
import Hero from './components/Hero'
import './App.css';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ButtonAppBar />
      <Hero />
    </MuiThemeProvider>
  );
}

export default App;
