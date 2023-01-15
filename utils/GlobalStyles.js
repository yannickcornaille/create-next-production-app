import { css, Global } from '@emotion/react';

import theme from '@/utils/theme';

const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body {
        height: 100vh;
        padding: 0;
        margin: 0;
        font-family: Roboto, sans-serif;
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
