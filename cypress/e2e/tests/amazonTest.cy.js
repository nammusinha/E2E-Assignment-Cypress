import { amazonHomePage } from "../../pages/amazonHomePage"
import dataAmazon from "../../fixtures/data-amazon.json"
import { amazonResultPage } from "../../pages/amazonResultPage"
import { amazonCartPage } from "../../pages/amazonCartPage"

const amazonHomePageObj = new amazonHomePage()
const resultPageObj = new amazonResultPage()
const cartPageObj = new amazonCartPage()


describe('testAutomation', () => {

  beforeEach(() => {
    cy.clearAllCookies()
    cy.launchURL()
  })

  it('productSearchWithText', () => {
    amazonHomePageObj.validatePageAndLookForToasters(dataAmazon.validationText)
    amazonHomePageObj.editSearchText(dataAmazon.searchText)
    amazonHomePageObj.clickOnSearch()
    resultPageObj.validateResultPagePostSearchedText().should("be.visible").contains(dataAmazon.searchText)
  })

  it('productSearchWithTextAndCategory', () => {
    amazonHomePageObj.validatePageAndLookForToasters(dataAmazon.validationText)
    amazonHomePageObj.selectFromDropDown(dataAmazon.selectFromDropDown)
    amazonHomePageObj.editSearchText(dataAmazon.searchText)
    amazonHomePageObj.clickOnSearch()
    resultPageObj.validateResultPagePostDropDownSelectionAndSearchText().should("be.visible").should('contain', dataAmazon.searchText)
  })

  it('addProductToShoppingCart', () => {
    amazonHomePageObj.validatePageAndLookForToasters(dataAmazon.validationText)
    amazonHomePageObj.editSearchText(dataAmazon.searchText)
    amazonHomePageObj.clickOnSearch()
    cartPageObj.addToCart();
    cartPageObj.validateCart().should('include.text', dataAmazon.itemInCartMessage)
  })

})
