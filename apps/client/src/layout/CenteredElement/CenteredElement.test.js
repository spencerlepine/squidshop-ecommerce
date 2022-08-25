import { render } from '@testing-library/react';
import CenteredElement from './index';

describe('CenteredElement', () => {
  test('should render without without throwing an error', () => {
    render(<CenteredElement />);
    expect(true).toBeTruthy();
  });
});
