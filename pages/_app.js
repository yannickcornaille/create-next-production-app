// Delete the following line if you are using Emotion
import '../styles/globals.css';
// Uncomment the following line if you are using Emotion
// import GlobalStyles from '@/utils/GlobalStyles';
// Uncomment the following lines if you are using MUI
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import theme from '@/utils/theme';

// const muiTheme = createTheme(theme);

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <GlobalStyles /> */}
      {/* <ThemeProvider theme={muiTheme}> */}
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp
