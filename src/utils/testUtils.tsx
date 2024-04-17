import { cloneElement, ReactNode, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { jest } from '@jest/globals';

import '../app/[locale]/globals.css';
import { defaultLocale } from '@/utils/locales';
import messages from '@/locales/en.json';

const nextIntlConfig = {
  locale: defaultLocale,
  messages,
};

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  const clonedChildren = cloneElement(children as ReactElement, {
    params: { locale: nextIntlConfig.locale },
  });

  return (
    <NextIntlClientProvider {...nextIntlConfig}>
      {clonedChildren}
    </NextIntlClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

// To test a Next.js page component, you have to mock the next-intl `unstable_setRequestLocale` function.
jest.mock('next-intl/server', () => ({
  ...(jest.requireActual('next-intl/server') as Object),
  unstable_setRequestLocale: () => ({ locale: defaultLocale }),
}));

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };
