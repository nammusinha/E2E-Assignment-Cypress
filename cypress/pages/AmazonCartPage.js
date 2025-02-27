export class amazonCartPage {

    webLocators = {
      imageLocator: 'img[class="s-image"]',
      addTocartButtonLocator: '#add-to-cart-button',
      goTocartLocator: '.a-button-text[href="/cart?ref_=sw_gtc"]',
      activeCart: '#sc-subtotal-label-activecart'
    }
    
    addToCart() {
      cy.get(this.webLocators.imageLocator).should('be.visible').first().click()
      cy.get(this.webLocators.addTocartButtonLocator).should('be.visible').click()
      cy.get(this.webLocators.goTocartLocator).should('be.visible').click()
    }
  
     validateCart() {
      return cy.get(this.webLocators.activeCart)
    }

  }