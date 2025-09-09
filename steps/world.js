class World {
  constructor(page, testInfo) {
    this.page = page;
    this.testInfo = testInfo;
  }

  async openHomePage() {
    await this.page.goto('https://playwright.dev');
  }

  async clickLink(name) {
    await this.page.getByRole('link', { name }).click();
  }
}

module.exports = { World };