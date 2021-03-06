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
    textSecondary: {
      main: '#DEE2E6',
    },
    background: {
      default: '#ffffff',
    },
    gray: {
      gray100: '#F1F3F4',
    },
  },
  typography: {
    fontFamily: 'MuseoSans',
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
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    h5: {
      fontFamily: 'MuseoSans700',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '24px',
    },
    h6: {
      fontFamily: 'MuseoSans500',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '24px',
    },
    subtitle1: {
      fontFamily: 'MuseoSans700',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '24px',
    },
    subtitle2: {
      fontFamily: 'MuseoSans500',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
    },
    caption: { fontFamily: 'MuseoSans700', fontWeight: 700, fontSize: '12px', lineHeight: '14px' },
    button: {
      fontFamily: 'MuseoSans700',
      fontWeight: 700,
    },
  },
  spacings: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '46px',
  },
};

export default createMuiTheme(theme);
