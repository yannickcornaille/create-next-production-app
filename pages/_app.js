import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

const MainNoSSR = dynamic(() => import('@/components/Main'), { ssr: false });

const App = ({ Component, pageProps }) => (
  <MainNoSSR>
    <Component {...pageProps} />
  </MainNoSSR>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({
    __lang: PropTypes.string,
    __namespaces: PropTypes.object,
  }).isRequired,
};

export default App;
