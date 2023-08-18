import { screen } from '@testing-library/react';

import { render } from '@/utils/testUtils';
import Example from '@/components/Example';

describe('Example', () => {
  it('renders a heading', () => {
    render(<Example />);

    const heading = screen.getByRole('heading', {
      name: /welcome to production-grade next\.js starter kit!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
