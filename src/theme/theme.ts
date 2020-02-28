import { createMuiTheme } from '@material-ui/core/styles';

export const theme = {
  palette: {
    primary: {
      main: '#028836',
    },
    secondary: {
      light: '#DEE2E6',
      main: '#202124',
      dark: '#6C757D',
    },
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    sizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      xxl: '35px',
    },
    subtitle1: {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '24px',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
};

export default createMuiTheme(theme);
