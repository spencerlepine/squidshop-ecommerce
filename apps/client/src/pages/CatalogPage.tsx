import * as React from 'react';
import PageElement from 'layout/PageElement';
import CatalogView from 'components/Catalog/CatalogView';
import { useLocation } from "react-router-dom";
import DepartmentLinkOptions from 'components/Department/DepartmentLinkOptions';

const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

// should render all departments with clickable buttons
const CatalogPage = () => {
  const query = useQuery();

  return (
    <PageElement maxWidth="md">
      <DepartmentLinkOptions />

      <CatalogView currentQuery={query.get('query') || ''} />
    </PageElement >
  );
}

export default CatalogPage;
