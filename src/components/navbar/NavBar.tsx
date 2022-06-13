import * as React from 'react';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import DivInput, { Search, SearchIconWrapper } from './additional';
import { Colors } from '../../assets/theming';

// images
import profile from '../../assets/images/profile.png';

// material icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { useClickOutside } from '../../hooks/clickOutSide';

interface PagesData {
  id: Number;
  name: String;
  Icon?: React.ReactElement<any, any>;
}

const pages: PagesData[] = [
  { id: 0, name: 'Products', Icon: <KeyboardArrowDownRoundedIcon /> },
  { id: 1, name: 'Rooms', Icon: <KeyboardArrowDownRoundedIcon /> },
  { id: 1, name: 'Inspirations' },
];

const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  const [opacity, setOpacity] = React.useState<boolean>(false);
  const [showInput, setShowInput] = React.useState<boolean>(false);

  // ref
  const focusInput = React.useRef<HTMLInputElement>(null);
  const searchMenu = React.useRef<HTMLDivElement>(null);

  // if click outSide
  useClickOutside({searchMenu, setShowSearch});

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  let windowWidth = window.innerWidth;

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // profile option
  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  // profile values
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <FavoriteBorderOutlinedIcon style={{ color: Colors.iconColor }} />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <ShoppingCartOutlinedIcon style={{ color: Colors.iconColor }} />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Box component="img" src={profile} alt="profile picture" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  React.useEffect(() => {
    if (showSearch) {
      if (focusInput.current) focusInput.current.focus();
    }
    if (showSearch && windowWidth < 600) {
      setShowInput(true);
      setTimeout(() => {
        setOpacity(true);
      }, 100);
    }
    if (!showSearch && opacity && windowWidth < 600) {
      setOpacity(false);
      setTimeout(() => {
        setShowInput(false);
      }, 250);
    }
  }, [showSearch, opacity, windowWidth]);

  return (
    <Box sx={{ flexGrow: 1, py: { xs: 2, sm: 0 } }}>
      <AppBar
        position="static"
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          px: { sm: '20px', md: '40px', lg: '70px' },
          py: { sx: '5px', sm: '15px', md: '25px' },
        }}
      >
        <Container maxWidth="2xl" sx={{}}>
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: '#000',
                textDecoration: 'none',
              }}
            >
              Funiro.
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon style={{ color: Colors.gray1 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                    {page.Icon && page.Icon}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h4"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                color: '#000',
                textDecoration: 'none',
              }}
            >
              Funiro.
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    px: { md: 2, lg: 3 },
                    color: Colors.gray1,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {page.name}
                  {page.Icon && page.Icon}
                </Button>
              ))}
            </Box>
            {/* Search is here */}
            <Search
              sx={{
                marginLeft: 0,
                flexGrow: 1,
                background: 'transparent',
                position: 'relative',
              }}
              ref={searchMenu}
            >
              <SearchIconWrapper onClick={() => setShowSearch(!showSearch)}>
                <SearchIcon style={{ color: Colors.gray1 }} />
              </SearchIconWrapper>
              <DivInput
                sx={{
                  display: { xs: showInput ? 'block' : 'none', sm: 'block' },
                  opacity: { xs: opacity ? 1 : 0, sm: 1 },
                  transition: 'all 0.2s ease-in-out',
                }}
                ref={focusInput}
              />
            </Search>
            {/* profile options */}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <FavoriteBorderOutlinedIcon
                  style={{ color: Colors.iconColor }}
                />
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <ShoppingCartOutlinedIcon style={{ color: Colors.iconColor }} />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Box component="img" src={profile} alt="profile picture" />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon style={{ color: Colors.gray1 }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default NavBar;
