import { render } from '@testing-library/react';
import Missing from 'pages/MissingPage';

test('should render without throwing error', () => {
  render(<Missing />);
  expect(true).toBeTruthy();
});
