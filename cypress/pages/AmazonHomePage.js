export class AmazonHomePage {

  webLocators = {
    bestSellerLocator: '.nav-a[href="/gp/bestsellers/?ref_=nav_cs_bestsellers"]',
    dropdownLocator: 'select[id="searchDropdownBox"]',
    selectFromDropDown: 'select[class="nsw-form__select"]',
    submitButtonLocator: "#nav-search-submit-button",
    twotabsearchtextbox: "#twotabsearchtextbox",
    toasterLocator: '#nav-flyout-anchor > div.a-section.glow-toaster.glow-toaster-theme-default.glow-toaster-slot-default.nav-coreFlyout.nav-flyout > div > div.glow-toaster-footer > span.a-button.a-spacing-top-base.a-button-base.glow-toaster-button.glow-toaster-button-dismiss > span > input',
    dismissButtonLocator: '#nav-flyout-anchor > div.a-section.glow-toaster.glow-toaster-theme-default.glow-toaster-slot-default.nav-coreFlyout.nav-flyout > div > div.glow-toaster-footer > span.a-button.a-spacing-top-base.a-button-base.glow-toaster-button.glow-toaster-button-dismiss > span > input'
     }

     //Validate page load is successful and dismiss the toaster if available
    validatePageAndLookForToasters(textToValidate) {
    this.validatePage(textToValidate)
    this.lookForToasterAndDismissIt()
  }

  // Validate if page has loaded succesfully
  validatePage(title) {
    cy.get(this.webLocators.bestSellerLocator).then(($el) => {
      if ($el.length ==0) {
        cy.log('Lenth is ',$el.length)
        cy.reload()
        cy.log("Site has been reLoaded")
      }
        else
        {
          cy.log("site loaded successfully")
        }
          
    })

    cy.get(this.webLocators.bestSellerLocator).should('have.text', title)
    
  }

  //Select an item from dropdwon and search for it
  selectFromDropDown(selectAnItemFromDropDown) {
    cy.scrollTo('top')
    cy.get(this.webLocators.dropdownLocator).select(selectAnItemFromDropDown, { force: true })
    cy.get(this.webLocators.submitButtonLocator).click();
  }

  //Search for an item by providing text to search text field
  searchForAnItem(searchText) {
    cy.get(this.webLocators.twotabsearchtextbox).type(searchText)
    cy.log("Typed searched item as " + searchText)
    cy.get(this.webLocators.submitButtonLocator).click();
  }

  //Look for toaster and dismiss it if available
  lookForToasterAndDismissIt() {
    cy.get(this.webLocators.toasterLocator).then(($e1) => {
      cy.get(this.webLocators.dismissButtonLocator).click()
    })

  }
}