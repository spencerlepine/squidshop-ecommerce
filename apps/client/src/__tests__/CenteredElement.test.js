import { render } from '@testing-library/react';
import CenteredElement from '@layout/CenteredElement';

describe('CenteredElement', () => {
  test('should render without without throwing an error', () => {
    render(<CenteredElement />);
    expect(true).toBeTruthy();
  });
});
