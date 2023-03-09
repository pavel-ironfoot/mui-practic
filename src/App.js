import { createTheme, Paper, ThemeProvider, } from '@mui/material';
import './App.css';
import { green, orange, purple, red } from '@mui/material/colors';
import React, { useState } from 'react';
import DrawerAppBar from './components/MainBox';

function App() {

  const outerTheme = createTheme({
    typography: {
      h3: {
        fontSize: 14,
      }
    },
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: red[500],
      },
    },
  });

  const innerTheme = createTheme({
    typography: {
      body2: {
        fontSize: 20
      },
      h3: {
        fontWeight: 800,
        fontSize: 18,
      },
      body1: {
        color: 'red',
        fontSize: 20,
        fontWeight: 600,
      }
    },
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: orange[500],
      },
    },
  });
  const [theme, setTheme] = useState('outerTheme');

  const changeTheme = () => {
    setTheme(theme === 'outerTheme' ? 'innerTheme' : 'outerTheme');
  }
  const check = () => {
    if (theme === 'outerTheme') return outerTheme;
    if (theme === 'innerTheme') return innerTheme;
  }

  return (
    <ThemeProvider theme={check()}>

      <div className="App">
        {/* <ButtonAppBar changeTheme={changeTheme}/>
          <AppBox /> */}
        <DrawerAppBar changeTheme={changeTheme} />
      </div>

    </ThemeProvider>
  );
}

export default App;
