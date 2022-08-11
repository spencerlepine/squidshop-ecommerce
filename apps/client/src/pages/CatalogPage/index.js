import CatalogView from '../../components/CatalogView';
import { Container } from '@mui/system';

// should render all departments with clickable buttons TODO 
const CatalogPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <CatalogView />
    </Container>
  );
}

export default CatalogPage;
