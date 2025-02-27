const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:  'cypress-mochawesome-reporter',
  vidoe: true,
  e2e: {
    baseUrl: 'https://www.amazon.com.au/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },  
  env: {
    URL: 'https://www.amazon.com.au/'
  }
});
