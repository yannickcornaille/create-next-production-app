const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const { i18n } = require('./next-i18next.config.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  eslint: {
    dirs: [
      '__stories__',
      '__tests__',
      'components',
      'contexts',
      'cypress',
      'hooks',
      'models',
      'pages',
      'utils',
    ],
  },
};

module.exports = withPWA(nextConfig);
