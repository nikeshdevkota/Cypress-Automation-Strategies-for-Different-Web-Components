const { defineConfig } = require("cypress");
const cmsBaseUrl = 'https://stage-cms.onewardrobe.com.au'
const webappBaseUrl = "https://onewardrobe.com.au"

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
    }},
    env: {
      grepFilterSpecs: true
    },
    // specPattern:  "cypress/e2e/*.cy.js",
    baseUrl: process.env.target === "cms" ? cmsBaseUrl: webappBaseUrl,
    defaultCommandTimeout:10000,
    pageLoadTimeout:60000,
    requestTimeout:10000,
    responseTimeout:10000,
    screenshotOnRunFailure:true,
    video:false,
    videosFolder:"cypress/videos",
    videoCompression:32,
    trashAssetsBeforeRuns:true,
  },
});