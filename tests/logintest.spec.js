import {test,exptect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';


test('test',async({page}) => {

//login
    const login = new LoginPage(page)

    await login.gotoLoginPage()
    await login.login('Servo','123456')
   // await page.waitForTimeout(3000)

    //Home
    const home = new HomePage(page)

    await home.addProductToCart("Nexus 6")
   // await page.waitForTimeout(3000)
    //await home.gotoCart()

    //cart
   /* const cart = new CartPage(page)
    const status = await cart.checkProductInCart('Nexus 6')
    expect(await status).toBe(true)*/
   // await page.waitForTimeout(3000)
});




