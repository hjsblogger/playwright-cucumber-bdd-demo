const { expect } = require('@playwright/test');
const { Given, When, Then } = require('./fixtures');

Given('I am on home page', async function () {
  await this.openHomePage();
});

When('I click link {string}', async function (name) {
  await this.clickLink(name);
});

Then('I see in title {string}', async function (text) {
  await expect(this.page).toHaveTitle(new RegExp(text));
});
