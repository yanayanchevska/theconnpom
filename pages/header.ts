import { Page, Locator,  expect } from '@playwright/test';
import { Methods } from './methods/methods';
export class Header extends Methods {
  //readonly page: Page;
  readonly logoLink: Locator;
  readonly logoPrimary: Locator;
  readonly logoTransparent: Locator;
  readonly accountLink: Locator;
  readonly searchLink: Locator;
//  readonly searchInput: Locator;
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
    super(page);
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
  //  this.searchInput = page.locator('input[name="q"]');
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
    await this.checkVisibility(this.logoLink);
    await this.checkAttribute(this.logoLink,'href', '/');
   // await expect(this.logoLink).toBeVisible();
   // await expect(this.logoLink).toHaveAttribute("href", "/");
  }

  async checkLogoPrimary() {
    await this.checkVisibility(this.logoPrimary);
    await this.checkAttribute(this.logoPrimary, 'width', '250');
    await this.checkAttribute(this.logoPrimary, 'alt', 'The Connected Shop Logo');
   // await expect(this.logoPrimary).toBeVisible();
   // await expect(this.logoPrimary).toHaveAttribute("width", "250");
   // await expect(this.logoPrimary).toHaveAttribute(
    //   "alt",
    //   "The Connected Shop Logo"
   // );
  }

  async checkLogoTransparent() {
    await this.checkVisibility(this.logoTransparent);
    await this.checkAttribute(this.logoTransparent, 'width', '250');
    // await expect(this.logoTransparent).toBeVisible();
    // await expect(this.logoPrimary).toHaveAttribute("width", "250");
    // await expect(this.logoPrimary).toHaveAttribute(
    //   "alt",
    //   "The Connected Shop Logo"
    // );
  }

  async checkAccounLink() {
    await this.checkVisibility(this.accountLink);
    await this.checkAttribute(this.accountLink, 'href', '/account');
    await this.checkText(this.accountLink, 'Account');
    // await expect(this.accountLink).toBeVisible();
    // await expect(this.accountLink).toHaveAttribute("href", "/account");
    // await expect(this.accountLink).toHaveText("Account");
  }

  // async checkSearchInput() {
  //   await this.checkVisibility(this.searchInput);
  //   await this.checkAttribute(this.searchInput, 'placeholder', 'Search...');
  //   await expect(this.searchInput).toBeEditable();
  //   await expect(this.searchInput).toBeEnabled();
  // await expect(this.searchInput).toBeVisible();
  // await expect(this.searchInput).toHaveAttribute("placeholder", "Search...");
  //}

  async checkSearchLink() {
    await this.checkVisibility(this.searchLink);
    await this.checkAttribute(this.searchLink, 'href', '/search');
    await this.checkAttribute(this.searchLink, 'data-action', 'toggle-search');
    await this.checkText(this.searchLink, 'Search');

    // await expect(this.searchLink).toBeVisible();
    // await expect(this.searchLink).toHaveAttribute("href", "/search");
    // await expect(this.searchLink).toHaveAttribute("data-action", "toggle-search");
    // await expect(this.searchLink).toHaveText("Search");
  }

  async clickSearchLink() {
    await this.searchLink.click();
  }


  async checkCartLink() {
    await this.checkVisibility(this.cartLink);
    await this.checkAttribute(this.cartLink, 'data-drawer-id', 'sidebar-cart');
    await this.checkAttribute(this.cartLink, 'href', '/cart');
    await this.checkAttribute(this.cartLink, 'data-drawer-id', 'sidebar');
    await this.checkAttribute(this.cartLink, 'aria-label', 'Open cart');

    // await expect(this.cartLink).toBeVisible();
    // await expect(this.cartLink).toHaveAttribute("data-drawer-id","sidebar-cart");
    // await expect(this.cartLink).toHaveAttribute("href", "/cart");
    // await expect(this.cartLink).toHaveAttribute("data-drawer-id", "sidebar");
    // await expect(this.cartLink).toHaveAttribute("aria-label", "Open cart");
  }

  async checkCartCount() {
    await this.checkVisibility(this.cartCount);

    //await expect(this.cartCount).toBeVisible();
    //const cartCountNumb = await this.cartCount.textContent();
    //expect(cartCountNumb).toBeGreaterThanOrEqual(0);
  }

  async checkCartCount2() {
    return await this.cartCount.textContent();
  }

  async checkHomeTab() {
    await this.checkVisibility(this.homeTab);
    await this.checkText(this.homeTab, 'Home');

    // await expect(this.homeTab).toBeVisible();
    // await expect(this.collectionsTab).toHaveText("Home");
  }

  async checkOnSaleTab() {
    await this.checkVisibility(this.onSaleTab);
    await this.checkText(this.onSaleTab, 'On Sale');

    // await expect(this.onSaleTab).toBeVisible();
    // await expect(this.collectionsTab).toHaveText("On Sale");
  }

  async checkCollectionsTab() {
    await this.checkVisibility(this.collectionsTab);
    await this.checkText(this.collectionsTab, 'Collections');

    // await expect(this.collectionsTab).toBeVisible();
    // await expect(this.collectionsTab).toHaveText("Collections");
  }

  async checkPersonalTab() {
    await this.checkVisibility(this.personalTab);
    await this.checkText(this.personalTab, 'Personal');

    // await expect(this.personalTab).toBeVisible();
    // await expect(this.personalTab).toHaveText("Personal");
  }

  async checkBusinessesTab() {
    await this.checkVisibility(this.personalTab);
    await this.checkText(this.businessesTab, 'Businesses');

    // await expect(this.businessesTab).toBeVisible();
    // await expect(this.businessesTab).toHaveText("Businesses");
  }

  async checktechTalkTab() {
    await this.checkVisibility(this.techTalkTab);
    await this.checkText(this.techTalkTab, 'Tech Talk');

    // await expect(this.techTalkTab).toBeVisible();
    // await expect(this.techTalkTab).toHaveText("Tech Talk");
  }

  async checkaboutUsTab() {
    await this.checkVisibility(this.aboutUsTab);
    await this.checkText(this.aboutUsTab, 'About us');

    // await expect(this.aboutUsTab).toBeVisible();
    // await expect(this.aboutUsTab).toHaveText("About us");
  }

  async checkfaqTab() {
    await this.checkVisibility(this.faqTab);
    await this.checkText(this.faqTab, 'FAQ');

    // await expect(this.faqTab).toBeVisible();
    // await expect(this.faqTab).toHaveText("FAQ");
  }

  async checkContactTab() {
    await this.checkVisibility(this.contactTab);
    await this.checkText(this.contactTab, 'Contact');

    // await expect(this.contactTab).toBeVisible();
    // await expect(this.contactTab).toHaveText("Contact");
  }

  async checkcallTab() {
    await this.checkVisibility(this.callTab);
    await this.checkText(this.callTab, "📞 Call");

    // await expect(this.callTab).toBeVisible();
    // await expect(this.callTab).toHaveText("📞 Call");
  }
}