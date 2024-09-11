import { Page } from '@playwright/test';
import Utilities from '../Utilities/Utilities';

export default class Payment{
   
    constructor(public page: Page) {
      
    }


    async sendPaymentInformation(){
        await this.page.locator('input[name="name_on_card"]').click();
        await this.page.locator('input[name="name_on_card"]').fill('Omar');
        await this.page.locator('input[name="card_number"]').fill('4896489648964896');
        await this.page.getByPlaceholder('ex.').fill('311');
        await this.page.getByPlaceholder('MM').fill('07');
        await this.page.getByPlaceholder('YYYY').fill('2029');
    }

    async confirmOrder(){
        await this.page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
        await this.page.getByRole('link', { name: 'Continue' }).click();
    }

}