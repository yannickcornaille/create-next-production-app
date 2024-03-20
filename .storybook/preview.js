import i18n from './i18next.js';
import '../src/app/globals.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
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
    i18n,
    locale: 'en',
    locales: {
      en: { title: 'English', left: '🇺🇸' },
      fr: { title: 'Français', left: '🇫🇷' },
    },
  },
};

export default preview;
