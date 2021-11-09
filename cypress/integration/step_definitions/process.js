import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://best.aliexpress.com/"
const number = { 
    '1': '1',
    '2': '2'
}
const selectors = {
    "aliexpress.com": url,
    "Close ads": ".btn-close",
    "search box": ".search-key-box",
    "lens": ".search-button",
    "option ad": "._9tla3",
    "stock": ".addcart-result-title",
    "add to cart": ".product-action > .addcart-wrap > .next-btn"
}

Given ("I open {string} page", (elementName) =>{
    cy.visit(selectors[elementName])
})

When ("I Click {string} Button", (elementName) => {
    cy.get(selectors[elementName]).click()
})

When ("I type {string} in the {string}", (text, elementName) =>{
    cy.get(selectors[elementName]).type(text)
})

When("I Click {string} {string}", (elementName, text) => {
    cy.get(selectors[elementName]).eq(text).should($div => {
        expect($div.attr('target'), 'target').to.equal('_blank')
    $div.attr('target', '_self')
  }).click()

})

Then("I expect have minimun one product in {string}",(elementName) =>{
    cy.get(selectors[elementName]).should('contain', '1')
        
})


