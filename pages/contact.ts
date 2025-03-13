import {Page, Locator, expect } from '@playwright/test';
import { Methods } from './methods/methods';
export class Contact extends Methods {
  readonly contactTab: Locator;
  readonly pageTitle: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly bodyInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageTitle = page.locator(
      '[class="SectionHeader__Heading Heading u-h1"]'
    );
    this.nameInput = page.locator('input[name="contact[name]"]');
    this.emailInput = page.locator('input[name="contact[email]"]').nth(0);
    this.phoneInput = page.locator('input[name="contact[Your phone]"]');
    this.bodyInput = page.locator('[class="Form__Textarea"]');
    this.submitButton = page.locator(
      '[class="Form__Submit Button Button--primary Button--full"]'
    );
  }

  async checkPageTitle() {
    await this.checkVisibility(this.pageTitle);
  }

  async checkNameInput() {
    await this.checkVisibility(this.nameInput);
    await this.checkAttribute(this.nameInput, "class", "Form__Input");
    await this.checkAttribute(this.nameInput, "aria-label", "Your name");
    await this.checkAttribute(this.nameInput, "placeholder", "Your name");
  }

  async fillNameInputPositive() {
    await this.fillText(this.nameInput, "testname");
  }

  async checkNameInputValidation(expectedMessage: string) {
    const validationMessage = await this.nameInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    await expect(validationMessage).toBe(expectedMessage);
  }

  async checkEmailInput() {
    await this.checkVisibility(this.emailInput);
    await this.checkAttribute(this.emailInput, "class", "Form__Input");
    await this.checkAttribute(this.emailInput, "aria-label", "Your email");
    await this.checkAttribute(this.emailInput, "placeholder", "Your email");
  }

  async fillEmailInputPositive() {
    await this.fillText(this.emailInput, "testemail@gmail.com");
  }

  async fillEmailInputNegative() {
    await this.fillText(this.emailInput, "testemail");
  }

  async checkEmailInputValidation(expectedMessage: string) {
    const validationMessage = await this.emailInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    await expect(validationMessage).toBe(expectedMessage);
  }

  async checkPhoneInput() {
    await this.checkVisibility(this.phoneInput);
    await this.checkAttribute(this.phoneInput, "class", "Form__Input");
    await this.checkAttribute(this.phoneInput, "aria-label", "Your phone");
    await this.checkAttribute(this.phoneInput, "placeholder", "Your phone");
  }

  async fillPhoneInputPositive() {
    await this.fillText(this.phoneInput, "0634658330");
  }

  async checkPhoneInputValidation(expectedMessage: string) {
    const validationMessage = await this.phoneInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    await expect(validationMessage).toBe(expectedMessage);
  }

  async checkBodyInput() {
    await this.checkVisibility(this.bodyInput);
    await this.checkAttribute(this.bodyInput, "class", "Form__Textarea");
    await this.checkAttribute(this.bodyInput, "aria-label", "Your message");
    await this.checkAttribute(this.bodyInput, "placeholder", "Your message");
  }

  async fillBodyInputPositive() {
    await this.fillText(this.bodyInput, "test test test");
  }

  async checkBodyInputValidation(expectedMessage: string) {
    const validationMessage = await this.bodyInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    await expect(validationMessage).toBe(expectedMessage);
  }

  async checkSubmitButton() {
    await this.checkVisibility(this.submitButton);
    await this.checkAttribute(this.submitButton, "type", "submit");
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }
}

