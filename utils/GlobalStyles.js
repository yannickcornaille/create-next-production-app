import { css, Global } from '@emotion/react';
import { Roboto } from 'next/font/google';

import theme from '@/utils/theme';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body {
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: ${roboto.style.fontFamily}, sans-serif;
        background-color: ${theme.colors.white_fa};

        /* overflow-x: hidden; */
      }

      * {
        box-sizing: border-box;
      }

      /* stylelint-disable-next-line selector-id-pattern */
      #__next {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    `}
  />
);

export default GlobalStyles;
