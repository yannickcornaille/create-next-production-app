import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { appWithTranslation } from 'next-i18next';
// Delete the following line if you are using Emotion
import '../app/globals.css';
// Uncomment the following line if you are using Emotion
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import GlobalStyles from '@/utils/GlobalStyles';
// Uncomment the following lines if you are using MUI
// import theme from '@/utils/theme';

// const muiTheme = createTheme(theme);

const AllTheProviders = ({ children }) => {
  return (
    <>
      {/* <GlobalStyles /> */}
      {/* <ThemeProvider theme={muiTheme}> */}
      {children}
      {/* </ThemeProvider> */}
    </>
  );
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
