/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../__stories__/**/*.mdx',
    '../__stories__/**/*.stories.js',
    {
      directory: '../components',
      titlePrefix: 'Next.js Components',
      files: '**/*.stories.*',
    },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    /**
     * Work in progress for Storybook v7 support
     * https://github.com/stevensacks/storybook-react-i18next/pull/17
     */
    // 'storybook-react-i18next',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    config.resolve.fallback.fs = false;
    return config;
  },
};
export default config;
