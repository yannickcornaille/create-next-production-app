import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <meta name="application-name" content="Next.js PWA" />
      <meta name="description" content="Next.js production-grade PWA" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Next.js PWA" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <link rel="icon" type="image/png" sizes="16x16" href="/icons/16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/32x32.png" />
      <link rel="apple-touch-icon" href="/icons/180x180.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/152x152.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icons/167x167.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/180x180.png" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Next.js PWA" />
      <meta property="og:description" content="Next.js production-grade PWA" />
      <meta property="og:site_name" content="Next.js PWA" />
      <meta property="og:url" content="https://yourdomain.com" />
      <meta
        property="og:image"
        content="https://yourdomain.com/icons/180x180.png"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
