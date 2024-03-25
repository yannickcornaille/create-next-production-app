import { NextIntlClientProvider } from 'next-intl';

import '../src/app/[locale]/globals.css';
import { defaultLocale } from '@/utils/locales';
import messages from '@/locales/en.json';

const nextIntlConfig = {
  locale: defaultLocale,
  messages,
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <NextIntlClientProvider {...nextIntlConfig}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    locale: defaultLocale,
    locales: {
      en: { title: 'English', left: '🇺🇸' },
      fr: { title: 'Français', left: '🇫🇷' },
    },
  },
};

export default preview;
