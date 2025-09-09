const { defineConfig } = require('@playwright/test');
const { defineBddConfig, cucumberReporter } = require('playwright-bdd');

const testDir = defineBddConfig({
  features: 'features',
  steps: 'steps/*.js',
});

// before playwright-bdd v7
/*
const testDir = defineBddConfig({
  paths: ['features'],
  require: ['features/steps/*.js'],
  importTestFrom: 'features/steps/fixtures.js',
});
*/

module.exports = defineConfig({
  testDir,
  reporter: [cucumberReporter('html', { outputFile: 'cucumber-report/report.html' })],
  timeout: 90000, // 60 seconds for each test
  expect:
  {
    timeout: 10000, // default timeout for expect()
  },
  use:
  {
    actionTimeout: 0, // No timeout for actions (click, fill, etc.)
    navigationTimeout: 90000, // Navigation timeout (page.goto, etc.)
  },
});
