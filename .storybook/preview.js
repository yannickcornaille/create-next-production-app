import i18n from './i18next.js';
// Delete the following line if you are using Emotion
import '../src/app/globals.css';
// Uncomment the following line if you are using Emotion
// import GlobalStyles from '@/utils/GlobalStyles';
// Uncomment the following lines if you are using MUI
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import theme from '@/utils/theme';

// const muiTheme = createTheme(theme);

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <>
        {/* <GlobalStyles /> */}
        {/* <ThemeProvider theme={muiTheme}> */}
        <Story />
        {/* </ThemeProvider> */}
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
