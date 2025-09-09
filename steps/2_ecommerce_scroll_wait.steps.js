const { Given, When, Then } = require('./fixtures');
import { expect } from "@playwright/test";

Given("I navigate to LambdaTest ECommerce Playground Login Page", async function () {
  await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
});

When("I enter username {string}", async function (username) {
  /* console.log(username); */
  await this.page.locator("#input-email").focus();
  await this.page.locator("#input-email").click();
  await this.page.locator("#input-email").fill(username);
});

When("I enter password {string}", async function (password) {
  /* console.log(password); */
  await this.page.locator("#input-password").focus();
  await this.page.locator("#input-password").click();
  await this.page.locator("#input-password").fill(password);
});

When("I click on the login button", async function () {
  await this.page.locator("[value='Login']").click();
});

Then("the user should be logged into the LambdaTest ECommerce Playground", async function () {
  await expect(this.page.getByText("My Orders")).toBeVisible();
});

Then("I click on the Shop by Category menu", async function () {
  await this.page.locator(".both[href='#mz-component-1626147655']").click();
});

Then("I navigate to phone & tablets item", async function () {
  await this.page.getByText("Phone, Tablets & Ipod").click();
});

Then("I click on the {string} product", async function (productName) {
  const iPhoneImage = "#mz-product-grid-image-36-212408 > div > div.carousel-item.active > img";

  // await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  // await this.page.waitForTimeout(1000);
  // await this.page.evaluate(() => window.scrollTo(0, 0));
  // await this.page.waitForTimeout(2000);

  // await this.page.locator(iPhoneImage).evaluate((element) => {
  //   element.style.position = "relative";
  //   element.style.zIndex = "1000";
  //   element.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
  //   element.style.transition = "background-color 2.5s ease";
  // });

  // Wait for the page to be fully loaded
  await this.page.waitForLoadState("domcontentloaded");

  // Scroll to the bottom of the page
  await this.page.evaluate(() => {
    const element = document.documentElement || document.body;
    window.scrollTo(0, element.scrollHeight || 0);
  });
  await this.page.waitForTimeout(1000);

  // Scroll back to the top
  await this.page.evaluate(() => window.scrollTo(0, 0));
  await this.page.waitForTimeout(2000);

  // Apply CSS styles to the element
  await this.page.locator(iPhoneImage).evaluate((element) => {
    element.style.position = "relative";
    element.style.zIndex = "1000";
    element.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    element.style.transition = "background-color 2.5s ease";
  });

  await this.page.waitForTimeout(2000);
  await expect(this.page.locator(iPhoneImage)).toBeVisible({ timeout: 2000 });
  await this.page.locator(iPhoneImage).click();
  await expect(this.page).toHaveURL(/product_id=36/);
});

Then("I add {string} product to the cart", async function (productName) {
  await this.page.locator(".order-lg-1 > .text").click();
  await this.page.waitForTimeout(2000);
  await this.page.locator(".form-row .btn-secondary").click();
  await this.page.waitForTimeout(2000);
  await expect(this.page).toHaveURL(/checkout\/checkout/);
});