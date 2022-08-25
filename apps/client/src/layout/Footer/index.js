import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="p">
      {'Built by '}
      <Link color="inherit" href="https://spencerlepine.com/">
        Spencer Lepine
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm" style={{ textAlign: 'center' }}>
        <Typography variant="body1">
          View the <Link color="inherit" href="https://github.com/spencerlepine/squidshop-ecommerce">
            GitHub Repository
          </Link>
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}