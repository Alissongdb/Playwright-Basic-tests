// @ts-check
const { test, expect } = require('@playwright/test');

test.use({
  geolocation: { longitude: 41.890221, latitude: 12.492348},
  permissions: ['geolocation'],
})

test.beforeEach(async ({page}) => {
  await page.goto('https://automationpratice.com.br/')
})

test('Login com sucesso @login', async ({ page }) => {
  

  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded()

  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('alisson.test@gmail.com')
  await page.locator('#user').press('Tab')
  await page.locator('#password').fill('123456')
  await page.getByRole('button', { name: 'login' }).click()
  await page.screenshot({path: 'screenshots/loginsucesso.png'})
  await page.getByRole('button', { name: 'OK' }).click()

})

test.afterEach(async ({page}) => {
  await page.close()
})