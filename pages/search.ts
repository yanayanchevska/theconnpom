import {Page, Locator, expect } from '@playwright/test';
import { Methods } from './methods/methods';
export class Search extends Methods {
  readonly searchForm: Locator;
  readonly searchInput: Locator;
  readonly searchIcon: Locator;
  readonly searchCloseLink: Locator;
  readonly searchResult: Locator;
  readonly searchResultFirst: Locator;
  readonly searchResultFirstNegative: Locator;
  readonly viewAllLink: Locator;

  constructor(page: Page) {
    super(page);
    this.searchForm = page.locator('[class="Search__Form"]');
    this.searchInput = page.locator('input[name="q"]');
    this.searchIcon = page
      .locator('a[role="presentation"].Icon Icon--search-desktop')
      .nth(0);
    this.searchCloseLink = page.locator(
      '[class="Search__Close Link Link--primary"]'
    );
    this.searchResult = page
      .locator('[class="Heading Text--subdued u-h7"]')
      .nth(0);
    this.searchResultFirst = page
      .locator('[class="jdgm-prev-badge__text"]')
      .nth(0);
    this.searchResultFirstNegative = page
      .locator('[class="Segment__Content"]')
      .nth(0);
    this.viewAllLink = page.locator("Heading Link Link--secondary u-h7").nth(0);
  }

  async checkSearchForm() {
    await this.checkVisibility(this.searchForm);
    await this.checkAttribute(this.searchForm, "action", "/search");
    await this.checkAttribute(this.searchForm, "name", "GET");
    await this.checkAttribute(this.searchForm, "role", "search");
    await this.checkAttribute(this.searchForm, "data-hs-cf-bound", "true");
  }

  async checkSearchInput() {
    await this.checkVisibility(this.searchInput);
    await this.checkAttribute(this.searchInput, "placeholder", "Search...");
  }

  async fillSearchLink(value: string) {
    await this.searchInput.fill(value);
    await expect(this.searchInput).toHaveValue(value);
  }

  async checkSearchIcon() {
    await this.checkVisibility(this.searchIcon);
    await this.checkAttribute(this.searchIcon, "role", "presentation");
    await this.checkAttribute(this.searchIcon, "viewBox", "0 0 21 21");
  }

  async checkSearchCloseLink() {
    await this.checkVisibility(this.searchCloseLink);
    await this.checkAttribute(
      this.searchCloseLink,
      "data-action",
      "close-search"
    );
    await this.checkAttribute(
      this.searchCloseLink,
      "aria-label",
      "Close search"
    );
  }

  async checkSearchResult() {
    await this.checkVisibility(this.searchResult);
  }

  async checksearchResultFirst() {
    await this.checkVisibility(this.searchResultFirst);
  }

  async checksearchResultFirstNegative() {
    await this.checkVisibility(this.searchResultFirstNegative);
    await this.checkText(this.searchResultFirstNegative, "No results could be found");
  }

  async clicksearchResultFirst() {
    await this.searchResultFirst.click();
  }

  async checkViewAllLink() {
    await this.checkVisibility(this.viewAllLink);
  }
}
