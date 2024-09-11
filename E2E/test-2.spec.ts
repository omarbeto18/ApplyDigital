import { test, expect } from '@playwright/test';
import Products from "../E2E/Pages/Products";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import LoginModal from './Pages/LoginModal';
import Checkout from './Pages/Checkout';
import Payment from './Pages/Payment';

//Create the test to be implemented and executed
test('test', async ({ page }) => {
  //Create instances of all the objects of each of the components of the POM
  const product = new Products(page);
  const home = new Home(page);
  const cart = new Cart(page);
  const loginmodal = new LoginModal(page);
  const checkout = new Checkout(page);
  const payment = new Payment(page);

//Go to the main page and open it
  await page.goto('https://automationexercise.com/');
  
//Go to the product section  
  const locator = page.getByText(' Products');
  await locator.click();
  await page.pause();

//Open the product description of the item selected
  await product.gotoProducts();

//Add products with a random quantity to the cart
  await product.addProductToCart();

//Open the cart
  await home.gotoCart();

//Proceed to the checkout page  
  await cart.proceedtoCheckout();
 
//Login on the login modal  
  await loginmodal.Login();
 
//Go to the cart and proceed to checkout
  await home.gotoCart(); 
  await cart.proceedtoCheckout();

//Place the order  
  await checkout.placeOrder();

//Send payment information and Confirm the Order

  await payment.sendPaymentInformation();

  await payment.confirmOrder();

//Log out from your session
  await home.logout();
 
});

