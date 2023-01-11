import PropTypes from 'prop-types';
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

export default App;
