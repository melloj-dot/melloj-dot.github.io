import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Button,
  Divider
} from '@mui/material';

function About() {
  const { t } = useTranslation('about');

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        backgroundColor: 'primary.main',
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 3,
              fontWeight: 700,
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
            }}
          >
            {t('title')}
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
            variant="h5"
            component="h3"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            {t('subtitle')}
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            onClick={scrollToServices}
            sx={{
              backgroundColor: 'primary.main',
              color: 'white',
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              border: '2px solid #1D809F',
              '&:hover': {
                backgroundColor: 'white',
                borderColor: 'white',
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

export default About;
