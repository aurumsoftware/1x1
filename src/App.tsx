import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './containers/Routes';
import theme from './theme/theme';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
