import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';
import { HomePage } from '../pages/homepage';
import { Header } from '../pages/header';
import { Search } from '../pages/search';
import { Contact } from "../pages/contact";


test.describe('homePage', () => {

    let homePage: HomePage;
    let header: Header;
    let search: Search;
    let contact: Contact;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    header = new Header(page);
    search = new Search(page);
    contact = new Contact(page);
})

test('check homepage and header', async () => {

    await homePage.open();
    await homePage.checkURL();
})

}

);

