import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const MissingPage = () => {
  return (
    <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        404 Error
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {'Page not found :('}
      </Typography>
    </Container>);
}

export default MissingPage;
