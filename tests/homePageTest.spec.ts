import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';
import { HomePage } from '../pages/homepage';
import { Header } from '../pages/header';
import { Search } from '../pages/search';


test.describe('homePage', () => {

    let homePage: HomePage;
    let header: Header;
    let search: Search;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    header = new Header(page);
    search = new Search(page);


})

test('check homepage and header', async () => {

    await homePage.open();
    await homePage.checkURL();
})

}

);

