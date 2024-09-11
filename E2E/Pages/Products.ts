import { Page } from '@playwright/test';
//import Utilities from "../Utilities/Utilities";
import Utilities from '../Utilities/Utilities';

export default class Products{
    productSelected: string;
    constructor(public page: Page) {
       // this.page=page;
        this.productSelected='div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a';

    }

    async gotoProducts(){
        await this.page.locator((this.productSelected)).click();
    }

    async addProductToCart(){
        let quantity=Utilities.getRandom(1, 21).toString();
        await this.page.locator('#quantity').click();
        await this.page.locator('#quantity').fill(quantity);
        await this.page.getByRole('button', { name: ' Add to cart' }).click();
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
    }
}