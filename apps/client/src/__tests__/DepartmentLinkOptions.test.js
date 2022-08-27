import { render, screen } from '@testing-library/react';
import DepartmentView from '../components/Department/DepartmentLinkOptions/index';

test('should render without without throwing an error', () => {
  render(<DepartmentView />);
  expect(true).toBeTruthy();
});