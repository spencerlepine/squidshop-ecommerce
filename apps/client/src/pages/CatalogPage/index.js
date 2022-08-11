import CatalogView from '../../components/CatalogView';
import { Container } from '@mui/system';
import DepartmentLinkOptions from '../../components/Department/DepartmentLinkOptions';

// should render all departments with clickable buttons
const CatalogPage = () => {
  return (
    <Container component="main" maxWidth="md">
      <DepartmentLinkOptions />

      <CatalogView />
    </Container >
  );
}

export default CatalogPage;
