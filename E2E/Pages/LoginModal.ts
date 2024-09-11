import { Page } from '@playwright/test';
import Utilities from '../Utilities/Utilities';

export default class LoginModal{
   
    constructor(public page: Page) {
      
    }


    async clickLogin(){
        await this.page.getByRole('link', { name: 'Register / Login' }).click();
    }
    
    async Login(){
        await this.page.getByRole('link', { name: 'Register / Login' }).click();
        await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
        await this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('omar@mailinator.com');
        await this.page.getByPlaceholder('Password').click();
        await this.page.getByPlaceholder('Password').fill('Test');
        await this.page.getByRole('button', { name: 'Login' }).click();
 
    }

}