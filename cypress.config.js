const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {  
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    viewportWidth: 1366,
    viewportHeight: 768,
    supportFile: 'cypress/support/e2e.js'
  },
});
