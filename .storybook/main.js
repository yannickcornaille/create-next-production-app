/** @type { import('@storybook/nextjs').StorybookConfig } */
import path from 'path';

const config = {
  stories: [
    '../src/__stories__/**/*.mdx',
    '../src/__stories__/**/*.stories.js',
    {
      directory: '../src/components',
      titlePrefix: 'Next.js Components',
      files: '**/*.stories.*',
    },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    return config;
  },
};
export default config;
