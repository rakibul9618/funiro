import { Box, Typography } from '@mui/material';
import arrowRight from '../../assets/images/arrow-right.png';
import { Colors } from '../../assets/theming';

interface PriceData {
  text: String;
  price: String;
}

const PriceCard: React.FC<PriceData> = ({ text, price }) => {
  return (
    <Box
      component="div"
      className="price-card"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(255,255,255, 72%)',
        width: { xs: '160px', sm: '246px' },
        height: { xs: '80px', sm: '100px' },
        padding: { xs: '10px', md: '24px' },
        position: 'absolute',
        bottom: { xs: 'auto', sm: '8%', lg: '8%' },
        top: { xs: '3%', sm: 'auto' },
        right: { xs: '3%', sm: '6%', lg: '6%' },
      }}
    >
      <Typography
        component="h3"
        sx={{
          fontSize: { xs: '20px', sm: '28px' },

          fontWeight: 600,
          color: Colors.gray1,
        }}
      >
        Bohauss
      </Typography>
      <Typography
        component="p"
        sx={{
          fontSize: '16px',
          lineHeight: { xs: 1, sm: 1.5 },
          fontWeight: 500,
          color: Colors.gray2,
        }}
      >
        Luxury {text}
      </Typography>
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: {
            xs: text === 'big sofa 2-seat' ? '3px' : '10px',
            sm: '6px',
          },
        }}
      >
        <Typography
          component="p"
          sx={{
            fontSize: { xs: '16px', sm: '20px' },
            fontWeight: 600,
            color: Colors.gray1,
          }}
        >
          Rp {price}
        </Typography>
        <Box
          component="img"
          src={arrowRight}
          alt="arrow"
          sx={{
            width: { xs: '20px', sm: '24px' },
            height: { xs: '20px', sm: '24px' },
          }}
        />
      </Box>
    </Box>
  );
};
export default PriceCard;
