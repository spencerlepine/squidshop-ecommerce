import Typography from '@mui/material/Typography';
import CenteredElement from '../../components/CenteredElement';

const MissingPage = () => {
  return (
    <CenteredElement maxWidth="sm">
      <Typography variant="h2" component="h1" gutterBottom>
        404 Error
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {'Page not found :('}
      </Typography>
    </CenteredElement>);
}

export default MissingPage;
