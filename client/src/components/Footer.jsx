import { Container, Grid, Box, Typography, Link, IconButton } from '@mui/material';
import { LinkedIn, Twitter } from '@mui/icons-material';
import logo from '../assets/logo.jpg';

function Footer() {
  return (
    <Box component="footer" sx={{
      bgcolor: '#121212',
      color: 'white',
      py: 4,
      borderTop: '2px solid #00ffcc'
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Box display="flex" alignItems="center">
              <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
              <Typography variant="h6">ProofMarker</Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 1 }}>
              © {new Date().getFullYear()} Tüm Hakları Saklıdır.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">İletişim</Typography>
            <Typography>Email: fatihmuhammetuysal@gmail.com</Typography>
            <Typography>Tel: +90 54249239</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Bizi Takip Edin</Typography>
            <IconButton color="inherit" href="https://www.linkedin.com" target="_blank">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" href="https://www.twitter.com" target="_blank">
              <Twitter />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;