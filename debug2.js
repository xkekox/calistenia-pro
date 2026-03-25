const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));

    await page.goto('file://C:/Users/Administrator/.gemini/antigravity/scratch/manifestation-bridge/calistenia-pro/app.html');

    // Inject fake user data
    await page.evaluate(() => {
        const fakeUser = {
            email: 'velho@gmail.com',
            day: 1,
            restrictions: ['ombro'],
            completedDays: {},
            lastCompletedDate: null,
            assessmentDone: true
        };
        localStorage.setItem('calpro_velho@gmail.com', JSON.stringify(fakeUser));
    });

    console.log('Typing email...');
    await page.type('#email', 'velho@gmail.com');

    console.log('Clicking button...');
    await page.click('button[onclick="login()"]');

    await new Promise(r => setTimeout(r, 1000));

    const activeScreen = await page.evaluate(() => {
        const active = document.querySelector('.screen.active');
        return active ? active.id : 'none';
    });
    console.log('ACTIVE SCREEN:', activeScreen);

    await browser.close();
})();
