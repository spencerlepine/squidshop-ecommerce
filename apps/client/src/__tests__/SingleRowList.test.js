import { render } from '@testing-library/react';
import SingleRowList from '../components/Product/ProductHoriList/SingleRowList/index';

test('should render without without throwing an error', () => {
  render(<SingleRowList />);
  expect(true).toBeTruthy();
});