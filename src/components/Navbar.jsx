import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  useTheme,
  useMediaQuery,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const { t } = useTranslation('navbar');
  const [anchorEl, setAnchorEl] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  const menuItems = [
    { id: 'about', label: t('about') },
    { id: 'services', label: t('services') },
    { id: 'portfolio', label: t('portfolio') },
    { id: 'contact', label: t('contact') }
  ];

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 1 : 0}
      sx={{
        backgroundColor: scrolled ? 'white' : 'transparent',
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.1)' : 'none',
        margin: '16px',
        borderRadius: '12px',
        maxWidth: 'calc(100% - 32px)',
        left: '16px',
        right: '16px',
        top: '16px',
        width: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: scrolled ? 'text.primary' : 'white',
              fontWeight: 700,
              transition: 'color 0.3s ease',
              textShadow: scrolled ? 'none' : '2px 2px 4px rgba(0,0,0,0.5)',
              '&:hover': {
                color: scrolled ? 'primary.main' : 'secondary.main',
              }
            }}
          >
            Jose Caramello
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="end"
                color={scrolled ? 'default' : 'inherit'}
                aria-label="menu"
                onClick={handleMenu}
                sx={{
                  color: scrolled ? 'text.primary' : 'white',
                  textShadow: scrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.5)',
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{ minWidth: 150 }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  color={scrolled ? 'inherit' : 'inherit'}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: scrolled ? 'text.primary' : 'white',
                    textShadow: scrolled ? 'none' : '1px 1px 2px rgba(0,0,0,0.5)',
                    '&:hover': {
                      backgroundColor: scrolled ? 'primary.main' : 'rgba(255,255,255,0.2)',
                      color: scrolled ? 'white' : 'secondary.main',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
