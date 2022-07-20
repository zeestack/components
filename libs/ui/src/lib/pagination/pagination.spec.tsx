import Pagination from './pagination';
import { render } from '@testing-library/react';

describe('Pagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pagination total={0} />);
    expect(baseElement).toBeTruthy();
  });
});
