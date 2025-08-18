import React from 'react';
import RotatingText from '../components/RotatingText';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Button,
  Divider
} from '@mui/material';

function Header() {
  const { t, i18n } = useTranslation('header');
  const isEnglish = i18n.language.startsWith('en');

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1D809F 0%, #0F5A73 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/img/bgd_img.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            textAlign: 'center',
            color: 'white',
            py: 8
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Jose Caramello
          </Typography>
          
          <Divider
            sx={{
              width: '80px',
              height: '4px',
              backgroundColor: 'white',
              mx: 'auto',
              mb: 4
            }}
          />
          
          <Typography
            variant="h4"
            component="p"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontWeight: 300,
              minHeight: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.25rem' // Aumentado en 2px desde h4 (1.75rem + 0.5rem = 2.25rem)
            }}
          >
            <RotatingText prefix={isEnglish ? t('prefix') : ''} />
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            onClick={scrollToAbout}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'white',
                color: 'primary.main',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
              transition: 'all 0.3s ease'
            }}
          >
            {t('button')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
