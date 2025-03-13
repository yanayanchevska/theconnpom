import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';
import { HomePage } from '../pages/homepage';
import { Header } from '../pages/header';
import { Search } from '../pages/search';
import { Contact } from "../pages/contact";


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

  test("check search - existing product", async () => {
    await homePage.open();
    console.log('Open home page');
    await header.checkSearchLink();
    await header.clickSearchLink();
    await search.fillSearchLink("Smart Door Lock");
    await search.checksearchResultFirst();
  });

  test("check search - insensitivity", async () => {
    await homePage.open();
    await header.clickSearchLink();
    await search.fillSearchLink("SMART LOCK");
    await search.checksearchResultFirst();
  });

  test("check search - special characters", async () => {
    await homePage.open();
    await header.clickSearchLink();
    await search.fillSearchLink("0$%^#*%(#@$%*");
    await search.checksearchResultFirstNegative();
  });

  test("check search - language support", async () => {
    await homePage.open();
    await header.clickSearchLink();
    await search.fillSearchLink("смарт");
    await search.checksearchResultFirstNegative();
  });

    //  test("check search - an empty query", async ({ page }) => {
    //    await homePage.open();
    //    await header.clickSearchLink();
    //    await search.fillSearchLink(" ");
    //    await search.checksearchResultFirstNegative();
    //  });

});