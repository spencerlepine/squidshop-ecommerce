// import Products from '../components/Products';
import React from "react";
import { Container } from '@mui/system';
import MissingPage from '../MissingPage';
import DepartmentView from '../../components/Department/DepartmentView';
import DepartmentLinkOptions from '../../components/Department/DepartmentLinkOptions';
import departments from '../../components/Department/departments.json';
import { useParams } from "react-router-dom";

// should take departmentId from URL parameters
// should render missing page for invalid category
// should render links to all other departments
// should render department title
// should render on sale products TODO
// should render single row horizontal scroll for sale products TODO
// should render remaining product cards with images
// should render products in scrollable responsive grid
const DepartmentPage = () => {
  const { departmentId } = useParams();

  if (departments.indexOf(departmentId) === -1) {
    return <MissingPage />
  }

  return (
    <Container component="main" maxWidth="md">
      <DepartmentLinkOptions highlightedDepartment={departmentId} />

      <DepartmentView departmentId={departmentId} />
    </Container>
  )
};

export default DepartmentPage;
