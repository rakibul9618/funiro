import React from 'react';
import { ThemeProvider } from '@mui/material';
import NavBar from './components/navbar/NavBar';
import { Colors, theme } from './assets/theming';
import { Container } from '@mui/system';
import HeaderCarousel from './components/HeaderCarousel';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="2xl"
        disableGutters
        sx={{
          background: `linear-gradient(90deg, ${Colors.headBg1} 66.94%, ${Colors.headBg2} 33.06%)`,
          padding: 0,
        }}
      >
        <NavBar />
        <HeaderCarousel />
      </Container>
      {/* <Carousel /> */}
    </ThemeProvider>
  );
};

export default App;
