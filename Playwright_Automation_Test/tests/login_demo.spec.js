import {test, expect} from '@playwright/test'

test('Demo Login Test 1', async ({page}) => {

    await page.goto('https://demo.applitools.com/')
    // await page.pause()

    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Sneha')
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('1234')

    await page.getByRole('link', { name: 'Sign in' }).click()
    // await page.getByRole('link', { name: 'ACME' }).isVisible();

    // await expect(page.getByRole('link', { name: 'Sign in' })).toHaveCount(1)
})

test('Demo Login Test 2', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // await page.pause()

    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('banner').getByText('Marshall Zulauf').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

})

test.only('Demo Login Test 3', async ({page}) => {

    await page.pause();

    await page.goto('https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F');
    await page.getByRole('textbox', { name: 'Email:' }).dblclick();
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).dblclick();
    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: 'Email:' }).press('ControlOrMeta+x');
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).fill('Admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/f/ov2/av0/rch/nu9iz/0x4AAAAAAADnPIDROrmt1Wwj/light/fbE/new/normal?lang=auto"]').contentFrame().locator('body').click();
    await page.goto('https://admin-demo.nopcommerce.com/login?returnurl=%2Fadmin%2F');

})    