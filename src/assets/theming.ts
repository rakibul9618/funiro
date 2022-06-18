import { createTheme } from '@mui/material';

export const Colors = {
  gray1: '#333333',
  gray2: '#616161',
  gray3: '#898989',
  gray4: '#B0B0B0',
  gray5: '#D8D8D8',
  lightBg: '#F4F5F7',
  primary: '#E89F71',
  primaryLight: '#F6DDCC',
  greenAcc: '#2EC1AC',
  redAcc: '#E97171',
  // additional colors
  iconColor: '#262F56',
  headBg1: '#F9F1E7',
  headBg2: '#FCF8F3',

  // solid color
  white: '#fff',
  black: '#000',
};

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    '2xl': true; // adds the `mobile` breakpoint
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
      '2xl': 1536,
    },
  },
  typography: {
    allVariants: {
      fontFamily: ` 'Raleway', 'sans-serif'`,
      textTransform: 'none',
    },
    h1: {
      fontSize: '56px',
      fontWeight: '700',
      '@media (max-width:1399px)': {
      },
    },
    h2: {
      fontSize: '40px',
      fontWeight: '700',
      '@media (max-width:600px)': {},
    },
    h3: {
      fontSize: '26px',
      fontWeight: '600',
      '@media (max-width:600px)': {},
    },
    h4: {
      fontSize: '24px',
      fontWeight: '700',
      '@media (max-width:600px)': {},
    },
    h5: {
      fontSize: '24px',
      fontWeight: '600',
      '@media (max-width:600px)': {},
    },
    h6: {
      fontSize: '18px',
      fontWeight: '600',
      '@media (max-width:600px)': {},
    },
    subtitle1: {
      fontSize: '20px',
      fontWeight: '500',
      color: Colors.gray3,
      '@media (max-width:1199px)': {
        fontSize: '18px',
      },
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: '500',
      '@media (max-width:600px)': {},
    },
    button: {
      fontSize: '16px',
      fontWeight: '500',
      '@media (max-width:600px)': {},
    },
  },
  palette: {},
});
