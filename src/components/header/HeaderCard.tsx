import { Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Colors } from '../../assets/theming';

const StyledButton = styled(Button)(() => ({
  fontSize: '20px',
  fontWeight: 500,
  background: Colors.primary,
  color: Colors.white,
  cursor: 'pointer',
  '&:hover': {
    background: Colors.primary,
    color: Colors.white,
  },
}));

export const HeaderCard: React.FC = () => {
  return (
    <Container
      maxWidth="2xl"
      sx={{
        width: { xs: '95%', sm: '80%', md: '392px', lg: '444px', xl: '494px' },
        height: {
          xs: 'auto',
          md: '400px',
          lg: '447px',
          xl: '500px',
          '2xl': '553px',
        },
        p: {
          xs: '30px 15px',
          sm: '30px 30px',
          md: '27px 30px',
          lg: '27px 58px',
          '2xl': '58px',
        },
        background: 'rgba(255,255,255, 72%)',
        position: { xs: 'realative', md: 'absolute' },
        top: { sm: '-94px' },
        left: { sm: '-1px', lg: '100px', xl: '120px' },
        zIndex: 100,
        textAlign: { xs: 'center', md: 'start' },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          paddingBottom: { xs: '20px', md: '10px' },
          fontSize: { xs: '30px', sm: '45px', md: '42px', xl: '56px' },
        }}
      >
        High-Quality Furniture Just For You
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        sx={{
          paddingBottom: { xs: '47px', md: '25px', xl: '47px' },
          fontSize: { xs: '16px', sm: '18px', md: '18px', lg: '20px' },
        }}
      >
        Our furniture is made from selected and best quality materials that are
        suitable for your dream home
      </Typography>
      <StyledButton
        sx={{
          padding: { xs: '15px 76px', sm: '15px 113px', xl: '22px 137px' },
        }}
      >
        Shop Now
      </StyledButton>
    </Container>
  );
};
