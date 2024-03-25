import { screen } from '@testing-library/react';

import { render } from '@/utils/testUtils';
import Page from '../app/[locale]/page';

describe('Home page', () => {
  it('renders a heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', {
      name: /welcome to production-grade next\.js starter kit!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
