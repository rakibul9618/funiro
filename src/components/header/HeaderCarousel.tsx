import { useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import Slider from 'react-slick';
import { styled } from '@mui/material/styles';
import { HeaderCard } from './HeaderCard';
import { Colors } from '../../assets/theming';
import PriceCard from './PriceCard';

// mui icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// images
import one from '../../assets/images/header1.png';
import two from '../../assets/images/header2.png';
import three from '../../assets/images/header3.png';

const CustomBox = styled(Box)`
  & li {
    border-radius: 9999px;
    width: 11px;
    height: 11px;
    opacity: 0.3;
    background: #000;
    margin: 0 15px;
  }

  & li.slick-active {
    outline: 1px solid #e89f71;
    outline-offset: 7px;
    border-radius: 9999px;
    width: 11px;
    height: 11px;
    background: #e89f71;
    opacity: 1;
  }
  & li.slick-active button:before {
    font-size: 0;
  }

  & li button:before {
    font-size: 0;
  }
  @media (max-width: 1400px) {
    & li {
      width: 8px;
      height: 8px;
    }
    & li.slick-active {
      outline-offset: 6px;
      width: 8px;
      height: 8px;
    }
  }
  @media (max-width: 899px) {
    & li {
      width: 5.5px;
      height: 5.5px;
    }
    & li.slick-active {
      outline-offset: 5px;
      width: 5.5px;
      height: 5.5px;
    }
  }
  @media (max-width: 400px) {
    & li {
      margin: 0 10px;
      outline-offset: 4px;
    }
  }
`;

const arrowStyle = {
  position: 'absolute',
  top: { xs: '-64px', md: '-70px' },
  zIndex: 10,
  background: Colors.primaryLight,
  height: { xs: '30px', sm: '36px', xl: '48px' },
  width: { xs: '30px', sm: '36px', xl: '48px' },
  borderRadius: '999px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  color: Colors.primary,
};

const NextArrow: React.FC = (props: any) => {
  const { onClick } = props;
  return (
    <Box
      component="div"
      onClick={onClick}
      sx={{
        ...arrowStyle,
        right: { xs: '62px', lg: '66px' },
      }}
      className="carousel-arrow"
    >
      <ArrowForwardIosIcon
        sx={{ opacity: 1, fontSize: { xs: '16px', xl: '24px' } }}
      />
    </Box>
  );
};

const PrevArrow: React.FC = (props: any) => {
  const { onClick } = props;
  return (
    <Box
      component="div"
      onClick={onClick}
      sx={{
        ...arrowStyle,
        right: { xs: '100px', sm: '108px', md: '110px', xl: '125px' },
      }}
      className="carousel-arrow"
    >
      <ArrowBackIosIcon
        sx={{
          marginLeft: '7px',
          opacity: 1,
          fontSize: { xs: '16px', xl: '24px' },
        }}
      />
    </Box>
  );
};

const HeaderCarousel: React.FC = () => {
  const [vSlider, setVSlider] = useState<Boolean>(true);
  const settings = {
    className: vSlider ? 'slider variable-width' : '',
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: false,
    centerMode: vSlider ? true : false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: vSlider ? true : false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '160px',
          height: '27px',
          position: 'absolute',
          zIndex: 10,
          top: '-59px',
          left: { xs: '30%', sm: '50%', md: '36%', lg: '28%', xl: '22%' },
          transform: { xs: 'translateX(-50%)', md: 'none' },
        }}
      >
        <CustomBox component="ul" style={{ margin: '0px', padding: '0px' }}>
          {' '}
          {dots}{' '}
        </CustomBox>
      </Box>
    ),
  };

  const determineSliderModel = (): void => {
    let width = window.innerWidth;
    if (width < 900) {
      setVSlider(false);
    } else {
      setVSlider(true);
    }
  };

  useEffect(() => {
    let timeoutId: any = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => determineSliderModel(), 150);
    };
    window.addEventListener('resize', resizeListener);
    determineSliderModel();
    return () => {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    };
  }, [vSlider]);

  return (
    <Container
      maxWidth="2xl"
      sx={{
        overflow: 'hidden',
        px: { xs: 0, md: '24px' },
        paddingTop: '100px',
      }}
    >
      <Box component="div" sx={{ position: 'relative' }}>
        <Box
          component="div"
          sx={{
            marginLeft: {
              md: '130px',
              lg: '340px',
              xl: '400px',
              '2xl': '390px',
            },
          }}
        >
          <Slider {...settings}>
            <Box
              component="div"
              sx={{
                position: 'relative',
                '&:focus-visible': {
                  outline: 'none',
                },
              }}
            >
              <Box
                component="img"
                src={one}
                sx={{
                  height: {
                    xs: 'auto',
                    md: '340px',
                    lg: '400px',
                    xl: '480px',
                    '2xl': '553px',
                  },
                  width: { xs: '100%', md: 'auto' },
                  mx: { xs: 0, md: 2 },
                }}
                alt="picture of a sofa"
              />
              <PriceCard text="big sofa" price="10.000.000" />
            </Box>
            <Box
              component="div"
              sx={{
                position: 'relative',
                '&:focus-visible': {
                  outline: 'none',
                },
              }}
            >
              <Box
                component="img"
                src={two}
                sx={{
                  height: {
                    xs: 'auto',
                    md: '340px',
                    lg: '400px',
                    xl: '480px',
                    '2xl': '553px',
                  },
                  width: { xs: '100%', md: 'auto' },
                  mx: { xs: 0, md: 2 },
                }}
                alt="picture of a sofa"
              />
              <PriceCard text="big sofa 2-seat" price="17.000.000" />
            </Box>

            <Box
              component="div"
              sx={{
                position: 'relative',
                '&:focus-visible': {
                  outline: 'none',
                },
              }}
            >
              <Box
                component="img"
                src={three}
                sx={{
                  height: {
                    xs: 'auto',
                    md: '340px',
                    lg: '400px',
                    xl: '480px',
                    '2xl': '553px',
                  },
                  width: { xs: '100%', md: 'auto' },
                  mx: { xs: 0, md: 2 },
                }}
                alt="picture of a sofa"
              />
              <PriceCard text="big bed" price="30.000.000" />
            </Box>
          </Slider>
        </Box>
        <Box
          component="div"
          sx={{
            py: { xs: '40px', md: 0 },
            background: `linear-gradient(90deg, ${Colors.headBg1} 66.94%, ${Colors.headBg2} 33.06%)`,
            zIndex: 100,
            position: { xs: 'relative', md: 'static' },
          }}
        >
          <HeaderCard />
        </Box>
      </Box>
    </Container>
  );
};
export default HeaderCarousel;
