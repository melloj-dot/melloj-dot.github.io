import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider
} from '@mui/material';
import {
  Code as CodeIcon,
  AccountTree as ArchitectureIcon,
  Laptop as LaptopIcon
} from '@mui/icons-material';

function Services() {
  const { t } = useTranslation('services');
  const items = t('items', { returnObjects: true });

  const icons = [CodeIcon, ArchitectureIcon, LaptopIcon];

  return (
    <Box
      id="services"
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
              mx: 'auto'
            }}
          />
        </Box>

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 3,
          justifyContent: 'center',
          alignItems: 'stretch'
        }}>
          {items.map((item, index) => {
            const IconComponent = icons[index];
            return (
              <Card
                key={index}
                sx={{
                  flex: 1,
                  maxWidth: { xs: '100%', sm: '300px' },
                  minWidth: { xs: '100%', sm: '250px' },
                  textAlign: 'center',
                  p: 3,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 3 }}>
                    <IconComponent
                      sx={{
                        fontSize: '3rem',
                        color: 'primary.main'
                      }}
                    />
                  </Box>
                  
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      color: 'text.primary'
                    }}
                  >
                    {item.title}
                  </Typography>
                  
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default Services;
