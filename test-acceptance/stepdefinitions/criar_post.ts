import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import { ScriptElementKindModifier } from 'typescript';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function handleString(post:string):string{
    var postInArray: string[] = post.split(' ');
    postInArray.splice(-4,4);
    postInArray.shift();
    console.log(postInArray);
    post = postInArray.join(' ');

    return post;
}
defineSupportCode(function ({ Given, When, Then }) {

    Given(/^eu estou logado com o usuário "([^\"]*)"$/, async (username) => {
        await browser.get("http://localhost:4200/my_posts");
        var user:string = await element(by.id('username')).getText();
        expect(user).to.equal(username);
    })
    
    Given(/^eu estou na página "([^\"]*)"$/, async (name) => {
        
        await expect(browser.getTitle()).to.eventually.equal(name);
    })
    When(/^eu seleciono a opção "([^\"]*)"$/, async (name) => {
        console.log(name);
        await element(by.buttonText(<string>name)).click();
    })

    When(/^escrevo a frase "([^\"]*)" na caixa de texto/, async (post) => {
        console.log(post);
        await element(by.id('caixa-de-texto-post')).clear();
        await element(by.id('caixa-de-texto-post')).sendKeys(<string> post);
        
    })
    When(/^eu seleciono a opção "([^\"]*)"$ /, async (name) => {
        
        await element(by.buttonText(<string>name)).click();
        
        
    })
    Then(/^eu vejo na tela uma mensagem de sucesso/,async()=>{
        await expect(element(by.className('msg-sucess')).isPresent()).to.eventually.equal(true);
    })

    Then(/^eu ainda estou na página "([^\"]*)"$/,async(pageName)=>{
        await expect(browser.getTitle()).to.eventually.equal(pageName);

    })
    Then(/^eu vejo a frase "([^\"]*)" na minha lista de posts/,async(post:string)=>{
        var mostRecentPost:string = await element.all(by.className('post-list')).first().getText();
        mostRecentPost = handleString(mostRecentPost);
        expect(mostRecentPost).to.equal(post);
    })
    // Given(/^I'm on the page "([^\"]*)"$/, async (name) => {
    //     await browser.get("http://localhost:4200/my_posts");
    //     await expect(browser.getTitle()).to.eventually.equal(name);
    // })

    // Given(/^the "([^\"]*)" "([^\"]*)" from "([^\"]*)", costing "(\d*)" doesn't appear on the list$/, async (color, name, brand, price) => {
    //     expect((await element.all(by.id(`car-${name}-${brand}-${price}-${color}`))).length).to.equal(0);
    // })

    // When(/^I fill the name fild with "([^\"]*)", the brand with "([^\"]*)", the price with "(\d*)", the color with "([^\"]*)"$/, 
    //     async (name, brand, price, color) => {
    //         await element(by.id("what")).clear();
    //         await element(by.id("car-brand-input")).clear();
    //         await element(by.id("car-price-input")).clear();
    //         await element(by.id("car-color-input")).clear();

    //         await element(by.id("what")).sendKeys(<string> name);
    //         await element(by.id("car-brand-input")).sendKeys(<string> brand);
    //         await element(by.id("car-price-input")).sendKeys(<string> price);
    //         await element(by.id("car-color-input")).sendKeys(<string> color);
    // })

    // When(/^I confirm the registration$/, async () => {
    //     await element(by.id("register-car")).click();
    // })

    // Then(/^the "([^\"]*)" "([^\"]*)" from "([^\"]*)", costing "(\d*)" appears on the list$/, async (color, name, brand, price) => {
    //     expect((await element.all(by.id(`car-${name}-${brand}-${price}-${color}`))).length).to.equal(1);
    // })
});