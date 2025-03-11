import { Page, expect } from '@playwright/test';
import { Methods } from './methods/methods';
export class HomePage extends Methods {

    constructor(page:Page) {
        super(page);

   }
async open () {

    await this.page.goto('/');
}

async checkURL () {

    await expect(this.page).toHaveURL('https://theconnectedshop.com/');
}
async checkTitle () {
    await expect(this.page).toHaveTitle(
      'The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office'
    );
}

}