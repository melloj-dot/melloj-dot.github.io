import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects } from '/src/config/portfolioData.js';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Divider,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  GitHub as GitHubIcon,
  Lock as LockIcon,
  OpenInNew as OpenInNewIcon
} from '@mui/icons-material';

function Portfolio() {
  const { t } = useTranslation('portfolio');
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  return (
    <Box
      id="portfolio"
      sx={{
        py: 8,
        backgroundColor: 'background.paper'
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

        <Grid container spacing={2} justifyContent="center">
          {projects.map((project, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  height: '320px',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  },
                  transition: 'all 0.3s ease'
                }}
                onClick={() => handleProjectClick(project)}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '140px',
                    overflow: 'hidden'
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={t(project.title)}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                    pt: 1.5
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        color: 'text.primary',
                        fontSize: '0.95rem',
                        lineHeight: 1.2
                      }}
                    >
                      {t(project.title)}
                    </Typography>
                    
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.3,
                        fontSize: '0.8rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}
                    >
                      {t(project.description)}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mt: 1.5,
                    pt: 1,
                    borderTop: '1px solid',
                    borderColor: 'grey.200'
                  }}>
                    {project.isPrivate ? (
                      <Chip
                        icon={<LockIcon />}
                        label={t('privateRepo')}
                        color="warning"
                        size="small"
                        sx={{ 
                          fontSize: '0.7rem',
                          height: '24px'
                        }}
                      />
                    ) : (
                      <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.link, '_blank');
                        }}
                        sx={{ 
                          textTransform: 'none',
                          fontSize: '0.7rem',
                          px: 1,
                          py: 0.5,
                          minWidth: 'auto'
                        }}
                      >
                        {t('viewCode')}
                      </Button>
                    )}
                    
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      endIcon={<OpenInNewIcon />}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project);
                      }}
                      sx={{ 
                        textTransform: 'none',
                        fontSize: '0.7rem',
                        px: 1,
                        py: 0.5,
                        minWidth: 'auto',
                        '&:hover': {
                          backgroundColor: 'white',
                          color: 'success.main',
                        }
                      }}
                    >
                      Ver más
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle>
              <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                {t(selectedProject.title)}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <img
                  src={selectedProject.image}
                  alt={t(selectedProject.title)}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px'
                  }}
                />
              </Box>
              
              <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                {t(selectedProject.description)}
              </Typography>
              
              {selectedProject.details && (
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {t(selectedProject.details)}
                </Typography>
              )}
              
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                {selectedProject.isPrivate ? (
                  <Chip
                    icon={<LockIcon />}
                    label={t('privateRepo')}
                    color="warning"
                  />
                ) : (
                  <Button
                    variant="contained"
                    startIcon={<GitHubIcon />}
                    onClick={() => window.open(selectedProject.link, '_blank')}
                  >
                    {t('viewCode')}
                  </Button>
                )}
                
                <Button
                  variant="outlined"
                  onClick={handleCloseDialog}
                >
                  Cerrar
                </Button>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}

export default Portfolio;
