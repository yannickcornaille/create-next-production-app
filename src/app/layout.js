import PropTypes from 'prop-types';

// Delete the following line if you are using Emotion
import './globals.css';
// Uncomment the following line if you are using Emotion
// import GlobalStyles from '@/utils/GlobalStyles';
// Uncomment the following lines if you are using MUI
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import theme from '@/utils/theme';

// const muiTheme = createTheme(theme);

export const metadata = {
  metadataBase: new URL('https://create-next-production-app.com'),
  title: {
    default: 'Create Next Production App',
    template: '%s | Create Next Production App',
  },
  description: 'Next.js production-grade PWA',
  generator: 'Next.js',
  applicationName: 'Next.js PWA',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Yannick', url: 'https://github.com/yannickcornaille' }],
  manifest: '/manifest.json',
  openGraph: {
    title: 'Next.js PWA',
    description: 'Next.js production-grade PWA',
    type: 'website',
    images: [
      {
        url: '/icons/180x180.png',
        width: 800,
        height: 600,
      },
    ],
  },
  icons: {
    icon: [
      { url: '/icons/16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/icons/180x180.png' },
      { url: '/icons/152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/167x167.png', sizes: '167x167', type: 'image/png' },
      { url: '/icons/180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    appleWebApp: {
      title: 'Next.js PWA',
      statusBarStyle: 'default',
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  themeColor: 'black',
  colorScheme: 'dark light',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node,
};

export default RootLayout;
