import { Page } from '@playwright/test';
import Utilities from '../Utilities/Utilities';

export default class Home{
   
    constructor(public page: Page) {
      
    }

    async gotoCart(){
        await this.page.getByRole('link', { name: ' Cart' }).click();
    }

    async logout(){
        await this.page.getByRole('link', { name: ' Logout' }).click();
    }
}