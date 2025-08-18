import React from 'react';
import {
  Box,
  Container,
  Typography
} from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        backgroundColor: 'grey.100',
        borderTop: '1px solid',
        borderColor: 'grey.200'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{
            fontWeight: 500
          }}
        >
          Copyright &copy; 2025 - Jose Caramello
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;