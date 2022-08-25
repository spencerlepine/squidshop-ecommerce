import { render } from '@testing-library/react';
import PageElement from './index';

describe('PageElement', () => {
  test('should render without without throwing an error', () => {
    render(<PageElement />);
    expect(true).toBeTruthy();
  });
});
