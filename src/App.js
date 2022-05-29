import React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { Nav } from './layout';
import { Home, PINLinks, YTLinks, PODLinks, SignIn, SignUp } from './pages';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Router>
      <Nav>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'end',
            bgcolor: 'background.default',
            color: 'text.primary',
          }}
        >
          {theme.palette.mode} mode
          <IconButton aria-label='theme-button' sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Nav>
      <Routes>
        {sessionStorage.login === 'true' && <Route path="/" element={<Home />} />}
        {sessionStorage.login === 'true' && <Route path="/pin" element={<PINLinks />} />}
        {sessionStorage.login === 'true' && <Route path="/yt" element={<YTLinks />} />}
        {sessionStorage.login === 'true' && <Route path="/pod" element={<PODLinks />} />}
        {!sessionStorage.login && <Route path="*" element={<SignIn />} /> }
        
        {!sessionStorage.login && <Route path="/" element={<SignIn />} />}
        {!sessionStorage.login && <Route path="/signin" element={<SignIn />} />}
        {!sessionStorage.login && <Route path="/signup" element={<SignUp />} />}
        {!sessionStorage.login && <Route path="/" element={<SignIn />} />}
        {!sessionStorage.login && <Route path="/pin" element={<SignIn />} />}
        {!sessionStorage.login && <Route path="/yt" element={<SignIn />} />}
        {!sessionStorage.login && <Route path="/pod" element={<SignIn />} />}
        {!sessionStorage.login && <Route path="*" element={<SignIn />} /> }
      </Routes>
    </Router>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}