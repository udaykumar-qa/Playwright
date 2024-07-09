const {test,exptect, expect} = require('@playwright/test');
const exp = require('constants');

test('test',async({page}) => {
//get the title of the 
/*await page.goto('https://demoblaze.com/index.html');
const pageTitle = page.title();
console.log('pageTitle is:',pageTitle);
await expect(page).toHaveTitle('STORE');*/

//URL and Get the 
await expect(page).toHaveURL('https://demoblaze.com/index.html');
const pageUrl = page.url();
console.log('pageUrl is:',pageUrl);
});

test('test2',async({page}) => {

    await expect(page).toHaveURL('https://demo.nopecommerce.com/index.html');
    await expect(page).toHaveTitle('nonCommerce demo store');

});





