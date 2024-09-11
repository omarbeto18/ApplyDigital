import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  let quantity=getRandom(1, 21).toString();
  await page.goto('https://automationexercise.com/');
  const locator = page.getByText(' Products');
  await locator.click();
  await page.pause();
  await page.locator('div:nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
  await page.locator('#quantity').click();
  await page.locator('#quantity').fill(quantity);
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Register / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('omar@mailinator.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Place Order' }).click();
  await page.locator('input[name="name_on_card"]').click();
  await page.locator('input[name="name_on_card"]').fill('Omar');
  await page.locator('input[name="card_number"]').fill('4896489648964896');
  await page.getByPlaceholder('ex.').fill('311');
  await page.getByPlaceholder('MM').fill('07');
  await page.getByPlaceholder('YYYY').fill('2029');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
});

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}