const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: 'failureScreenShot',
  viewportWidth: 2000,
  viewportHeight: 1000,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://iprice.my/' ,
    chromeWebSecurity: false,
    experimentalWebKitSupport: true,
    modifyObstructiveCode:false
  },
});
