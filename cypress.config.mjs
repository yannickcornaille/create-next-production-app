import { defineConfig } from 'cypress';

const config = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: 'src/cypress/support/e2e.js',
    specPattern: 'src/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});

export default config;
