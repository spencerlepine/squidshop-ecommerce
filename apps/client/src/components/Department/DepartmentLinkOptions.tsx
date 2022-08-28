import Box from '@mui/material/Box';
import { Link } from '@material-ui/core';
import { Button } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import * as departments from './departments.json';

const highlightCurrentLink = (currentDepartment: string, thisDepartment: string) => {
  if (currentDepartment === thisDepartment) {
    return {
      backgroundColor: '#400CCC'
    }
  }
  return {}
}

type Props = {
  highlightedDepartment?: string;
}

const DepartmentLinkOptions: React.FC<Props> = ({ highlightedDepartment }) => (
  <Box style={{ display: 'flex', width: 'fit-content', maxWidth: '90vw', margin: 'auto', overflow: 'scroll' }}>
    {departments.map((department: any) => (
      <Link
        {...{
          component: RouterLink,
          to: `/department/${department}`,
          color: "inherit",
          style: { textDecoration: "none" },
          key: department,
        }}
      >
        <Button variant="contained" color="secondary" size="medium" sx={{ mt: 4, mr: 1, ml: 1 }} style={highlightCurrentLink(highlightedDepartment || '', department)}>
          {department}
        </Button>
      </Link>
    ))}
  </Box>
);

export default DepartmentLinkOptions;
