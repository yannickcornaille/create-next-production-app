import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { appWithTranslation } from 'next-i18next';

import '../app/globals.css';

const AllTheProviders = ({ children }) => {
  return <>{children}</>;
};

const nextI18NextConfig = {
  i18n: {
    // defaultLocale: 'cimode', // 'cimode' will cause the t function to always return the key
    defaultLocale: 'en',
    locales: ['en'],
  },
};

const customRender = (ui, options) =>
  render(ui, {
    wrapper: appWithTranslation(AllTheProviders, nextI18NextConfig),
    ...options,
  });

AllTheProviders.propTypes = {
  children: PropTypes.element.isRequired,
};

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };
