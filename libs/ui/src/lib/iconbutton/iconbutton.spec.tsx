import { render } from '@testing-library/react';

import Iconbutton from './iconbutton';

describe('Iconbutton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Iconbutton />);
    expect(baseElement).toBeTruthy();
  });
});
