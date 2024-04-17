import { Preview } from '@storybook/react';
import { NextIntlClientProvider } from 'next-intl';

import '../src/app/[locale]/globals.css';
import { locales, defaultLocale } from '@/i18n/locales';

const messages = locales.reduce(
  (acc, locale) => ({
    ...acc,
    [locale]: require(`@/locales/${locale}.json`),
  }),
  {}
);

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const locale = context.globals.locale;
      const theme = context.globals.theme;
      document.documentElement.setAttribute('lang', locale);
      document.documentElement.setAttribute('data-theme', theme);
      return (
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
          <Story />
        </NextIntlClientProvider>
      );
    },
  ],
  globalTypes: {
    locale: {
      description: 'Internationalization locale',
      defaultValue: defaultLocale,
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'fr', right: '🇫🇷', title: 'Français' },
        ],
      },
    },
    theme: {
      description: 'Dark/Light color modes',
      defaultValue: 'dark',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'dark', right: '☾', title: 'Dark mode' },
          { value: 'light', right: '☀', title: 'Light mode' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
