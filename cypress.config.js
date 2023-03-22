const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "83mq56",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true,
    env: {
      snapshotOnly: true,
    },
  },
});
