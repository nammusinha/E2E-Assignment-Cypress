import { AmazonHomePage } from "../../pages/AmazonHomePage"
import dataAmazon from "../../fixtures/data-amazon.json"
import { AmazonResultPage } from "../../pages/AmazonResultPage"
import {AmazonCartPage} from "../../pages/AmazonCartPage"

const amazonHomePageObj = new AmazonHomePage()
const resultPageObj = new AmazonResultPage()
const cartPageObj = new AmazonCartPage()


describe('testAutomation', () => {

  beforeEach(() => {
    cy.clearAllCookies()
    cy.launchURL()
  })

  it('searchForAnItem', () => {
    amazonHomePageObj.validatePageAndLookForToasters(dataAmazon.validationText)
    amazonHomePageObj.searchForAnItem(dataAmazon.searchText)
    resultPageObj.validateResultPagePostSearchedText().should("be.visible").contains(dataAmazon.searchText)
  })

  it('selectItemFromDropDown', () => {
    amazonHomePageObj.validatePageAndLookForToasters(dataAmazon.validationText)
    amazonHomePageObj.selectFromDropDown(dataAmazon.selectFromDropDown)
    resultPageObj.validateResultPagePostDropDownSelection().should("be.visible").should('have.text', dataAmazon.selectFromDropDown)
  })

  it('addItemToCart', () => {
    amazonHomePageObj.validatePageAndLookForToasters(dataAmazon.validationText)
    amazonHomePageObj.searchForAnItem(dataAmazon.searchText)
    cartPageObj.addToCart();
    cartPageObj.validateCart().should('include.text', dataAmazon.itemInCartMessage)
  })

})
