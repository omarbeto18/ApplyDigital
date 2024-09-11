import { Page } from '@playwright/test';
import Utilities from '../Utilities/Utilities';

export default class Cart{
   
    constructor(public page: Page) {
      
    }


    async proceedtoCheckout(){
        await this.page.getByText('Proceed To Checkout').click();
    }
}