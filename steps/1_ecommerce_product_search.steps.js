// import { Given, When, Then } from "@vitalets/playwright-bdd";
// import { expect } from "@playwright/test";
const { Given, When, Then } = require('./fixtures');
import { expect } from "@playwright/test";

Given("I navigate to LambdaTest ECommerce Playground", async function () {
  await this.page.goto("https://ecommerce-playground.lambdatest.io/");
});

When("I enter {string} in the search box", async function (searchTerm) {
  await this.page.locator('[data-autocomplete="5"]').focus();
  await this.page.locator('[data-autocomplete="5"]').click();
  await this.page.locator('[data-autocomplete="5"]').fill(searchTerm);
});

When("I click on the search button", async function () {
  await this.page.locator(".type-text").first().click({ force: true });
});

Then("I should see search results related to {string}", async function (searchTerm) {
  await expect(this.page.locator("h1.h4")).toContainText(searchTerm);
});

Then("the page title should contain {string}", async function (searchTerm) {
  const title = await this.page.title();
  expect(title.toLowerCase()).toContain(searchTerm.toLowerCase());
});