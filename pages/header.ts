import { Page, Locator,  expect } from '@playwright/test';
export class Header {
  readonly page: Page;
  readonly logoLink: Locator;
  readonly logoPrimary: Locator;
  readonly logoTransparent: Locator;
  readonly accountLink: Locator;
  readonly searchLink: Locator;
  readonly searchInput: Locator;
  readonly cartLink: Locator;
  readonly cartCount: Locator;
  readonly homeTab: Locator;
  readonly onSaleTab: Locator;
  readonly collectionsTab: Locator;
  readonly personalTab: Locator;
  readonly businessesTab: Locator;
  readonly techTalkTab: Locator;
  readonly aboutUsTab: Locator;
  readonly faqTab: Locator;
  readonly contactTab: Locator;
  readonly callTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoLink = page.locator('[class="Header__LogoLink"]');
    this.logoPrimary = page.locator(
      '[class="Header__LogoImage Header__LogoImage--primary"]'
    );
    this.logoTransparent = page.locator(
      '[class="Header__LogoImage Header__LogoImage--transparent"]'
    );
    this.accountLink = page
      .locator('[class="Heading Link Link--primary Text--subdued u-h8"]')
      .nth(0);
    this.searchLink = page.locator('a[data-action="toggle-search"]').nth(0);
    this.searchInput = page.locator('input[name="q"]');
    this.cartLink = page.locator(
      'a[href="/cart"][data-action="open-drawer"][data-drawer-id="sidebar-cart"].Heading.u-h6'
    );
    this.cartCount = page.locator(".Header__CartCount");
    this.homeTab = page.locator('[class="Heading u-h6"]').nth(0);
    this.onSaleTab = page.locator(
      'a[href="/collections/on-sale"].Heading.u-h6'
    );
    this.collectionsTab = page.locator(
      'a[href="/pages/products"].Heading.u-h6'
    );
    this.personalTab = page.locator('a[href="/pages/personal"].Heading.u-h6');
    this.businessesTab = page.locator(
      'a[href="/pages/businesses"].Heading.u-h6'
    );
    this.techTalkTab = page.locator('a[href="/blogs/tech-talk"].Heading.u-h6');
    this.aboutUsTab = page.locator('a[href="/pages/about-us"].Heading.u-h6');
    this.faqTab = page.locator('a[href="/pages/faqs"].Heading.u-h6');
    this.contactTab = page.locator('a[href="/pages/contact-us"].Heading.u-h6');
    this.callTab = page.locator('a[href="tel:3053303424"].Heading.u-h6');
  }

  async checkLogoLink() {
    await expect(this.logoLink).toBeVisible();
    await expect(this.logoLink).toHaveAttribute("href", "/");
  }

  async checkLogoPrimary() {
    await expect(this.logoPrimary).toBeVisible();
    await expect(this.logoPrimary).toHaveAttribute("width", "250");
    await expect(this.logoPrimary).toHaveAttribute(
      "alt",
      "The Connected Shop Logo"
    );
  }

  async checkLogoTransparent() {
    await expect(this.logoTransparent).toBeVisible();
    await expect(this.logoPrimary).toHaveAttribute("width", "250");
    await expect(this.logoPrimary).toHaveAttribute(
      "alt",
      "The Connected Shop Logo"
    );
  }

  async checkAccounLink() {
    await expect(this.accountLink).toBeVisible();
    await expect(this.accountLink).toHaveAttribute("href", "/account");
    await expect(this.accountLink).toHaveText("Account");
  }

  async checkSearchInput() {
    await expect(this.searchInput).toBeVisible();
    await expect(this.searchInput).toBeEditable();
    await expect(this.searchInput).toBeEnabled();
    await expect(this.searchInput).toHaveAttribute("placeholder", "Search...");
  }

  async checkSearchLink() {
    await expect(this.searchLink).toBeVisible();
    await expect(this.searchLink).toHaveAttribute("href", "/search");
    await expect(this.searchLink).toHaveAttribute(
      "data-action",
      "toggle-search"
    );
    await expect(this.searchLink).toHaveText("Search");
  }

  async checkCartLink() {
    await expect(this.cartLink).toBeVisible();
    await expect(this.cartLink).toHaveAttribute(
      "data-drawer-id",
      "sidebar-cart"
    );
    await expect(this.cartLink).toHaveAttribute("href", "/cart");
    await expect(this.cartLink).toHaveAttribute("data-drawer-id", "sidebar");
    await expect(this.cartLink).toHaveAttribute("aria-label", "Open cart");
  }

  async checkCartCount() {
    await expect(this.cartCount).toBeVisible();
    const cartCountNumb = await this.cartCount.textContent();
    // expect(cartCountNumb).toBeGreaterThanOrEqual(0);
  }

  async checkCartCount2() {
    return await this.cartCount.textContent();
  }

  async checkHomeTab() {
    await expect(this.homeTab).toBeVisible();
    await expect(this.collectionsTab).toHaveText("Home");
  }

  async checkOnSaleTab() {
    await expect(this.onSaleTab).toBeVisible();
    await expect(this.collectionsTab).toHaveText("On Sale");
  }

  async checkCollectionsTab() {
    await expect(this.collectionsTab).toBeVisible();
    await expect(this.collectionsTab).toHaveText("Collections");
  }

  async checkPersonalTab() {
    await expect(this.personalTab).toBeVisible();
    await expect(this.personalTab).toHaveText("Personal");
  }

  async checkBusinessesTab() {
    await expect(this.businessesTab).toBeVisible();
    await expect(this.businessesTab).toHaveText("Businesses");
  }

  async checktechTalkTab() {
    await expect(this.techTalkTab).toBeVisible();
    await expect(this.techTalkTab).toHaveText("Tech Talk");
  }

  async checkaboutUsTab() {
    await expect(this.aboutUsTab).toBeVisible();
    await expect(this.aboutUsTab).toHaveText("About us");
  }

  async checkfaqTab() {
    await expect(this.faqTab).toBeVisible();
    await expect(this.faqTab).toHaveText("FAQ");
  }

  async checkContactTab() {
    await expect(this.contactTab).toBeVisible();
    await expect(this.contactTab).toHaveText("Contact");
  }

  async checkcallTab() {
    await expect(this.callTab).toBeVisible();
    //    await expect(this.callTab).toHaveText("📞 Call");
  }
}