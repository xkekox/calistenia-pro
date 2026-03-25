const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));

    await page.goto('file://C:/Users/Administrator/.gemini/antigravity/scratch/manifestation-bridge/calistenia-pro/app.html');

    await page.type('#email', 'teste@gmail.com');
    await page.click('button[onclick="login()"]');

    await new Promise(r => setTimeout(r, 1000));

    // Check which screen is active
    const activeScreen = await page.evaluate(() => {
        const active = document.querySelector('.screen.active');
        return active ? active.id : 'none';
    });

    console.log('ACTIVE SCREEN IS:', activeScreen);
    await browser.close();
})();
