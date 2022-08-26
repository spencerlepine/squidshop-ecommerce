describe('Product Catalog', () => {
  it('loads successfully', () => {
    cy.visit('http://localhost:3000')
  })

  it('should render product demo images', () => {
    cy.get('.productList').find('img')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
        expect($img.length).to.be.greaterThan(9)
      })
  })

  it('clicking on product card should open products page', () => {
    cy.get('.productList').find('img')
      .and(($img) => {
        $img[0].click()
      })

    cy.get('.addToCartBtn')
      .should('be.visible')
    cy.get('.relatedProducts')
      .should('be.visible')
  })

  it('should render list of related products', () => {
    cy.get('.relatedProducts').find('img')
      .should('be.visible')
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0)
        expect($img.length).to.be.greaterThan(2)
      })
  })

  it('should render navigate to related products page on click', () => {
    cy.get('.relatedProducts').find('img')
      .should('be.visible')
      .and(($img) => {
        $img[0].click()
      })
  })

  it('should navigate back home', () => {
    cy.get('header')
      .within(() => {
        cy.get('h1')
          .should('contain.text', 'SquidShop')
          .click()
      })
  })
})