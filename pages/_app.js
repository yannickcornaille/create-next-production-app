import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import { useState } from 'react';

import '../styles/globals.css';
import ColorModeContext from '@/contexts/ColorModeContext';

const MainNoSSR = dynamic(() => import('@/components/Main'), { ssr: false });

const App = ({ Component, pageProps }) => {
  const [colorMode, setColorMode] = useState('dark');
  const toggleColorMode = () =>
    setColorMode(colorMode === 'dark' ? '' : 'dark');

  return (
    <ColorModeContext.Provider value={[colorMode, toggleColorMode]}>
      <MainNoSSR>
        <Component {...pageProps} />
      </MainNoSSR>
    </ColorModeContext.Provider>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({
    __lang: PropTypes.string,
    __namespaces: PropTypes.object,
  }).isRequired,
};

export default App;
