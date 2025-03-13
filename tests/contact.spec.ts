import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';
import { HomePage } from '../pages/homepage';
import { Header } from '../pages/header';
import { Search } from '../pages/search';
import { Contact } from '../pages/contact';


test.describe("homePage", () => {
  let homePage: HomePage;
  let header: Header;
  let search: Search;
  let contact: Contact;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    header = new Header(page);
    search = new Search(page);
    contact = new Contact(page);
  });

  test("check contact tab - positive case", async () => {
    await homePage.contactTabOpen();
    console.log("Open Contact tab");
    await contact.checkPageTitle();
    console.log("Check the title");
    await contact.fillNameInputPositive();
    console.log("Fill the name field with [testname] value");
    await contact.fillEmailInputPositive();
    console.log("Fill the email field with [testemail@gmail.com] value");
    await contact.fillPhoneInputPositive();
    console.log("Fill the phone field with [0634658330] value");
    await contact.fillBodyInputPositive();
    console.log("Fill the body field with [test test test] value");
    await contact.clickSubmitButton();
    console.log("Click the submit button");
  });

  test("check contact tab - name filed validation", async () => {
    await homePage.contactTabOpen();
    console.log("Open Contact tab");
    await contact.checkPageTitle();
    console.log("Check the title");
    await contact.fillEmailInputPositive();
    console.log("Fill the email field with [testemail@gmail.com] value");
    await contact.fillPhoneInputPositive();
    console.log("Fill the phone field with [0634658330] value");
    await contact.fillBodyInputPositive();
    console.log("Fill the body field with [test test test] value");
    await contact.clickSubmitButton();
    console.log("Click the submit button");
    await contact.checkNameInputValidation("Please fill out this field.");
    console.log("Check 'Please fill out this filed' validation message for name field");
  });

  test("check contact tab - email filed validation", async () => {
    await homePage.contactTabOpen();
    await contact.checkPageTitle();
    await contact.fillEmailInputNegative();
    await contact.clickSubmitButton();
    await contact.checkEmailInputValidation("Please include an '@' in the email address. 'testemail' is missing an '@'.");
    console.log(
      "1. Open contact tab and check the title; 2.Fill the email field with [testemail] value; 3. Click the submit button 4. Check 'Please fill out this filed' validation message for name field");
  });


    test("check contact tab - body filed validation", async () => {
      await homePage.contactTabOpen();
      console.log("Open Contact tab");
      await contact.checkPageTitle();
      console.log("Check the title");
      await contact.fillNameInputPositive();
      console.log("Fill the name field with [testname] value");
      await contact.fillEmailInputPositive();
      console.log("Fill the email field with [testemail@gmail.com] value");
      await contact.fillPhoneInputPositive();
      console.log("Fill the phone field with [0634658330] value");
      await contact.clickSubmitButton();
      console.log("Click the submit button");
      await contact.checkBodyInputValidation("Please fill out this field.");
      console.log("Check 'Please fill out this filed' validation message for body field");
    });






});