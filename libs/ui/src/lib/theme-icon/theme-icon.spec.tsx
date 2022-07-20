import { render } from '@testing-library/react';

import ThemeIcon from './theme-icon';

describe('ThemeIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeIcon />);
    expect(baseElement).toBeTruthy();
  });
});
