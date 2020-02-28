import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Meetings from './containers/Meetings';
import theme from './theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Meetings />
    </ThemeProvider>
  );
};

export default App;
