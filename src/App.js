import React from 'react';

import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import {theme} from './constants/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
