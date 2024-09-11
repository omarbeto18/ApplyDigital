import { test, expect } from '@playwright/test';
import Products from "../E2E/Pages/Products";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import LoginModal from './Pages/LoginModal';
import Checkout from './Pages/Checkout';
import Payment from './Pages/Payment';

test('test', async ({ page }) => {
  const product = new Products(page);
  const home = new Home(page);
  const cart = new Cart(page);
  const loginmodal = new LoginModal(page);
  const checkout = new Checkout(page);
  const payment = new Payment(page);

  await page.goto('https://automationexercise.com/');
  const locator = page.getByText(' Products');
  await locator.click();
  await page.pause();
  
  await product.gotoProducts();
  await product.addProductToCart();

  await home.gotoCart();
  await cart.proceedtoCheckout();
 
  await loginmodal.Login();
 
  await home.gotoCart();
 
  await cart.proceedtoCheckout();

  await checkout.placeOrder();

  await payment.sendPaymentInformation();

  await payment.confirmOrder();

  await home.logout();
 
});

