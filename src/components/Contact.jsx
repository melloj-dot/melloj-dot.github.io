import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Link
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';

function Contact() {
  const { t } = useTranslation('contact');

  const contactInfo = [
    {
      icon: PhoneIcon,
      value: '+54 3573 442422',
      label: t('phone'),
      link: 'tel:+543573442422'
    },
    {
      icon: EmailIcon,
      value: 'jose.caramello.jobs@gmail.com',
      label: t('email'),
      link: 'mailto:jose.caramello.jobs@gmail.com'
    },
    {
      icon: LinkedInIcon,
      value: 'LinkedIn',
      label: t('linkedin'),
      link: 'https://www.linkedin.com/in/jose-caramello/'
    }
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: 'text.primary'
            }}
          >
            {t('title')}
          </Typography>
          
          <Divider
            sx={{
              width: '80px',
              height: '4px',
              backgroundColor: 'primary.main',
              mx: 'auto',
              mb: 4
            }}
          />
          
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            {t('description')}
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      <IconComponent
                        sx={{
                          fontSize: '3rem',
                          color: 'primary.main'
                        }}
                      />
                    </Box>
                    
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        color: 'text.primary'
                      }}
                    >
                      <Link
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        sx={{
                          textDecoration: 'none',
                          color: 'inherit',
                          '&:hover': {
                            color: 'primary.main',
                          }
                        }}
                      >
                        {info.value}
                      </Link>
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontWeight: 500
                      }}
                    >
                      {info.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
