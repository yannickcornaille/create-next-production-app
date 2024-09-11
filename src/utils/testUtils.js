import PropTypes from 'prop-types';
import { cloneElement } from 'react';
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { createTranslator } from 'use-intl/core';

import '../app/[locale]/globals.css';
import { defaultLocale } from '@/i18n/locales';
import messages from '@/locales/en.json';

const nextIntlConfig = {
  locale: defaultLocale,
  messages,
};

const AllTheProviders = ({ children }) => {
  const clonedChildren = cloneElement(children, {
    params: { locale: nextIntlConfig.locale },
  });

  return (
    <NextIntlClientProvider {...nextIntlConfig}>
      {clonedChildren}
    </NextIntlClientProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

AllTheProviders.propTypes = {
  children: PropTypes.element.isRequired,
};

// To test a Next.js page component, you have to mock the next-intl `unstable_setRequestLocale` function.
jest.mock('next-intl/server', () => ({
  ...jest.requireActual('next-intl/server'),
  unstable_setRequestLocale: () => ({ locale: defaultLocale }),
  getTranslations: () => createTranslator(nextIntlConfig),
}));

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };
