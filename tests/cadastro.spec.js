// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page}) => {
  await page.goto('https://automationpratice.com.br/')
})

test('Cadastro com sucesso @cadastro', async ({ page }) => {
  await page.getByRole('link', { name: ' Cadastro' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('alisson gabriel dal bosco');
  await page.locator('#email').click();
  await page.locator('#email').fill('alisson.qazando@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'Cadastrar' }).click();
  await page.screenshot({path: 'screenshots/cadastrusucesso.png'})
  await page.getByRole('button', { name: 'OK' }).click();
  await page.close();
})

test.afterEach(async ({page}) => {
  await page.close()
})