import React from 'react';
import { ThemeProvider } from '@mui/material';
import NavBar from './components/navbar/NavBar';
import { Colors, theme } from './assets/theming';
import { Container } from '@mui/system';
import HeaderCarousel from './components/header/HeaderCarousel';
import Benefits from './components/Benefits';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="2xl"
        disableGutters
        sx={{
          background: `linear-gradient(90deg, ${Colors.headBg1} 66.94%, ${Colors.headBg2} 33.06%)`,
          padding: 0,
          zIndex: 9,
        }}
      >
        <NavBar />
        <HeaderCarousel />
      </Container>
      <Container maxWidth="2xl" sx={{  }}>
        <Benefits />
      </Container>
    </ThemeProvider>
  );
};

export default App;
