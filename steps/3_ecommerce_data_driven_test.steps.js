// import { Given, When, Then } from "@vitalets/playwright-bdd";
// import { expect } from "@playwright/test";
const { Given, When, Then } = require('./fixtures');
import { expect } from "@playwright/test";

Given("I navigate to LambdaTest ECommerce Playground HomePage", async function () {
  await this.page.goto("https://ecommerce-playground.lambdatest.io/");
});

When("I search for {string}", async function (product) {
  await this.page.locator('[data-autocomplete="5"]').focus();
  await this.page.locator('[data-autocomplete="5"]').click();
  await this.page.locator('[data-autocomplete="5"]').fill(product);
  await this.page.waitForTimeout(2000);
  await this.page.locator(".type-text").first().click({ force: true });
});

Then("I should see search results for {string}", async function (searchTerm) {
  await expect(this.page.locator("h1.h4")).toContainText(searchTerm);
});

Then("The page url should contain {string}", async function (product) {
  const actualUrl = await this.page.url();
  const normalizedUrl = actualUrl.replace(/\+/g, " ").toLowerCase();
  /* console.log(`Actual URL: ${actualUrl}`); */
  /* console.log(`Normalized URL: ${normalizedUrl}`); */
  expect(normalizedUrl).toContain(product.toLowerCase());
});