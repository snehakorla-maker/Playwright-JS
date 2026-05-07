import {test, expect, chromium} from '@playwright/test'

test('slow motion and video recording demo', async () => {

    // Launch browser
    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });

    // Create a new ingognito browser context
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width: 800, height: 600}
        }
    });

    // Create a new page inside context
    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // await page.pause()

    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Dispose context once it's no longer needed
    await context.close();

})