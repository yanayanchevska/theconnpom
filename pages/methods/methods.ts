import { Page, Locator, expect } from '@playwright/test';
import { measureMemory } from 'vm';
export class Methods {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkVisibility(locator: Locator, message?: string) {
    try {
      await expect(
        locator,
        message || `expected element to be visible`
      ).toBeVisible();
    } catch (error) {
      console.log(`Element ${locator} is not visible`, error);
      throw error;
    }
  }

  async checkAttribute(
    locator: Locator,
    attribute: string,
    value: string,
    message?: string
  ) {
    try {
      await expect(
        locator,
        message || `expected ${attribute} to be ${value}`
      ).toHaveAttribute(attribute, value);
    } catch (error) {
      console.log(`Attr is not found ${locator}`, error);
      throw error;
    }
  }

  async checkText(locator: Locator, text: string, message?: string) {
    try {
      await expect(locator, message || `expected text ${text}`).toHaveText(
        text
      );
    } catch (error) {
      console.log(`Not expected text ${locator}`, error);
      throw error;
    }
  }

  async fillText(locator: Locator, text: string) {
    try {
      await locator.fill(text);
      await expect(locator).toHaveValue(text);
    } catch (error) {
      console.log(`Failed to fill text ${locator}`, error);
      throw error;
    }
  }


}
