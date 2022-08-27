import { render } from '@testing-library/react';
import PageElement from '../layout/PageElement';

describe('PageElement', () => {
  test('should render without without throwing an error', () => {
    render(<PageElement />);
    expect(true).toBeTruthy();
  });
});
