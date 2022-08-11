import { render, screen } from '@testing-library/react';
import DepartmentView from './index';

test('should render without without throwing an error', () => {
  render(<DepartmentView />);
  expect(true).toBeTruthy();
});