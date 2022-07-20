import { render } from '@testing-library/react';

import Seachbar from './searchbar';

describe('Seachbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Seachbar />);
    expect(baseElement).toBeTruthy();
  });
});
