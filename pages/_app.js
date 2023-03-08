import PropTypes from 'prop-types';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

// Delete the following line if you are using Emotion
import '../styles/globals.css';
// Uncomment the following line if you are using Emotion
// import GlobalStyles from '@/utils/GlobalStyles';
// Uncomment the following lines if you are using MUI
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import theme from '@/utils/theme';

// const muiTheme = createTheme(theme);

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    {/* <GlobalStyles /> */}
    {/* <ThemeProvider theme={muiTheme}> */}
    <Component {...pageProps} />
    {/* </ThemeProvider> */}
  </>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({
    __lang: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    __namespaces: PropTypes.object,
  }).isRequired,
};

export default appWithTranslation(App);
