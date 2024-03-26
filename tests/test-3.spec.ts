import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://staging.digitalsymphony.it/lbs-fabulous/');

  await page.getByRole('link', { name: 'Offerings' }).click();

  await page.getByRole('link', { name: 'Participating Projects' }).click();
  await page.locator('#KitaBestariTownhouse_features').click();
  await page.locator('#moreinfo_KitaBestariTownhouse').click();


  await page.locator('#sejati_features').click();
  await page.locator('#moreinfo_sejati').click();
  await page.locator('#prestige_features').click();
  await page.locator('#moreinfo_prestige').click();
  await page.locator('#Astella_features').click();
  await page.locator('#moreinfo_Astella').click();
  await page.locator('#SuteraApartment_features').click();
  await page.locator('#moreinfo_SuteraApartment').click();
  await page.locator('#SuteraTownhouse_features').click();
  
  await page.locator('#SuteraTownhouse_register_now_back').click();

  await page.getByPlaceholder('Full Name*').click();
  await page.getByPlaceholder('Full Name*').fill('Ammar');
  await page.getByPlaceholder('Phone Number (e.g: 0123456789').fill('01111474745');
  await page.getByPlaceholder('Email (e.g: example@email.com').click();
  await page.getByPlaceholder('Email (e.g: example@email.com').fill('pizsammar@gmail.com');
  await page.locator('#project').selectOption('KitaSejati');

  await page.locator('#project').click();
  await page.locator('#tnc').check();
  await page.locator('#register').click();
  await page.getByRole('button', { name: 'Submit Your Interest' }).click();

  // const page3Promise = page.waitForEvent('popup');
  // await page.locator('#whatsapp-btn').click();
  // const page3 = await page3Promise;
});
