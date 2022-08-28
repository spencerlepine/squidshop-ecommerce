import * as React from 'react';
import PageElement from 'layout/PageElement';
import MissingPage from './MissingPage';
import DepartmentView from 'components/Department/DepartmentView';
import DepartmentLinkOptions from 'components/Department/DepartmentLinkOptions';
const departments = [
  "tees",
  "hoodies",
  "hats",
  "decor",
  "gear",
  "surf boards"
]

import { useParams } from "react-router-dom";

// should take departmentId from URL parameters
// should render missing page for invalid category
// should render links to all other departments
// should render department title
// should render on sale products
// should render single row horizontal scroll for sale products
// should render remaining product cards with images
// should render products in scrollable responsive grid
const DepartmentPage = () => {
  const { departmentId } = useParams();

  if (departments.indexOf(departmentId || '') === -1) {
    return <MissingPage />
  }

  return (
    <PageElement maxWidth="md">
      <DepartmentLinkOptions highlightedDepartment={departmentId} />

      <DepartmentView departmentId={departmentId} />
    </PageElement>
  )
};

export default DepartmentPage;
