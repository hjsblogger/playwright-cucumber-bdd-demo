const { test: base, createBdd } = require('playwright-bdd');
const { World } = require('./world');

const test = base.extend({
  world: async ({ page }, use, testInfo) => {
    const world = new World(page, testInfo);
    await use(world);
  },
});

const { Given, When, Then } = createBdd(test, { worldFixture: 'world' });

module.exports = { test, Given, When, Then };
