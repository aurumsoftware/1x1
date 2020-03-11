import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import Meetings from './containers/Meetings';
import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import Routes from './containers/Routes';

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
