import React from 'react';
import './App.css';
import SimpleBottomNavigation from './layout/SimpleBottomNavigation';
import { Nav, Layout } from './layout';
import {Home, PINLinks, YTLinks, PODLinks} from './pages';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
          <Nav/>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route  path="/pin" element={<PINLinks/>} />
              <Route  path="/yt" element={<YTLinks/>} />
              <Route  path="/pod" element={<PODLinks/>} />
            </Routes>
      </Router>
      </ThemeProvider>
  );
}

export default App;
