import React from 'react';
import CatalogView from '../../components/CatalogView';
import { Container } from '@mui/system';
import { useLocation } from "react-router-dom";
import DepartmentLinkOptions from '../../components/Department/DepartmentLinkOptions';

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

// should render all departments with clickable buttons
const CatalogPage = () => {
  const query = useQuery();

  return (
    <Container component="main" maxWidth="md">
      <DepartmentLinkOptions />

      <CatalogView currentQuery={query.get('query')} />
    </Container >
  );
}

export default CatalogPage;
