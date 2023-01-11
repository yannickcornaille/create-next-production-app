/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  eslint: {
    dirs: [
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

module.exports = nextConfig;
