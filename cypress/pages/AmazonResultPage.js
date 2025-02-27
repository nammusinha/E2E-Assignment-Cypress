export class amazonResultPage {

  webLocators = {
    pageBannerText: 'div[class="fst-h1-st pageBanner"] h1',
    searchTextLocator: '#search > span > div > h1',
    pageResultBanner:'.a-color-state.a-text-bold'

  }

  // Validate result page with text selected from dropdown
  validateResultPagePostDropDownSelection() {
    return cy.get(this.webLocators.pageBannerText)
  }

  // Validate result page with category and text selected 
  validateResultPagePostDropDownSelectionAndSearchText() {
    return cy.get(this.webLocators.searchTextLocator)
  }
  
  // validate result page with text searched for the item 
  validateResultPagePostSearchedText() {
    return cy.get(this.webLocators.searchTextLocator)
  }

}