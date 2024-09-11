import { Page } from '@playwright/test';
import Utilities from '../Utilities/Utilities';

export default class Checkout{
   
    constructor(public page: Page) {
      
    }


    async placeOrder(){
        await this.page.getByRole('link', { name: 'Place Order' }).click();
    }
}