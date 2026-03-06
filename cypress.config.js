const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    defaultCommandTimeout: 80000,
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    env: {
      production: "",
      stagining: "",
    },
    screenshotOnRunFailure: true,
    pageLoadTimeout: 70000,
    retries: {
      runMode: 2,
      openMode: 0,
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
