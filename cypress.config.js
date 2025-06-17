const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/reports/mocha',
        quite: true,
        overwrite: false,
        html: false,
        json: true,
      }
    },
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true
    },
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    screenshotOnRunFailure: true,
    video: false,
    videosFolder: "cypress/videos",
    videoCompression: 32,
    trashAssetsBeforeRuns: true,
  },
});