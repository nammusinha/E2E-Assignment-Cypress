export class AmazonResultPage {

  webLocators = {
    pageBannerText: 'div[class="fst-h1-st pageBanner"] h1',
    searchTextLocator: '#search > span > div > h1',

  }

  // Validate result page with text selected from dropdown
  validateResultPagePostDropDownSelection() {
    return cy.get(this.webLocators.pageBannerText)
  }

  // validate result page with text searched for the item 
  validateResultPagePostSearchedText() {
    return cy.get(this.webLocators.searchTextLocator)
  }

}