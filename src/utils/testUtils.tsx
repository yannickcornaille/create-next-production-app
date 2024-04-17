import { cloneElement, ReactNode, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { createTranslator } from 'use-intl/core';
import { jest } from '@jest/globals';

import '../app/[locale]/globals.css';
import { defaultLocale } from '@/i18n/locales';
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
  ...(jest.requireActual('next-intl/server') as object),
  unstable_setRequestLocale: () => ({ locale: defaultLocale }),
  getTranslations: () => createTranslator(nextIntlConfig),
}));

const router = {
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  push: jest.fn(),
  prefetch: jest.fn(),
  replace: jest.fn(),
};

jest.mock('next/navigation', () => ({
  useRouter: () => router,
  usePathname: () => '/',
  useSelectedLayoutSegment: () => ({ locale: nextIntlConfig.locale }),
}));

jest.mock('next-intl/navigation', () => ({
  createSharedPathnamesNavigation: () => ({
    Link: () => null,
    redirect: () => jest.fn(),
    usePathname: () => '/',
    useRouter: () => router,
  }),
}));

// @ts-expect-error: Too difficult to type
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
    formData: () => Promise.resolve({}),
    text: () => Promise.resolve('Test'),
    blob: () => Promise.resolve([]),
  })
) as jest.Mock;

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };
