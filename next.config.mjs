import nextPWA from 'next-pwa';
import createNextIntlPlugin from 'next-intl/plugin';

const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPWA(withNextIntl(nextConfig));
