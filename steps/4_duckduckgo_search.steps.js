const { Given, When, Then } = require('./fixtures');
import { expect } from "@playwright/test";

Given("I open the DuckDuckGo homepage", async function () {
  await this.page.goto("https://duckduckgo.com/");
});

Then("Look out for {string}", async function (searchTerm) {
  await this.page.locator("#searchbox_input").fill(searchTerm);
  await this.page.locator("#searchbox_input").press("Enter");
});

Then("I should see results related to {string}", async function (searchTerm) {
  await expect(this.page).toHaveURL(new RegExp(searchTerm, "i"));
});