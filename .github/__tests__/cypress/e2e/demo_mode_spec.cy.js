const clickHeaderLink = (index) => {
  return cy.get('header')
    .within(() => {
      cy.get('a')
        .and(($img) => {
          $img[index].click()
        })
    })
}

describe('[DEMO MODE] The Home Page', () => {
  it('loads successfully', () => {
    cy.visit('http://localhost:3000')
  })

  describe('Demo Settings', () => {
    it('should be able to toggle demo data mode', () => {
      cy.contains('Use Demo Data').click()
      cy.contains('Disable Demo').click()
      cy.contains('Use Demo Data').click()
    })
  })

  describe('Header', () => {
    it('should render page title', () => {
      cy.get('header')
        .should('be.visible')
        .within(() => {
          cy.get('h1')
            .should('contain.text', 'SquidShop')
          cy.get('a')
            .should('be.visible')
        })
    })
  })

  describe('Product Catalog', () => {
    it('should render product demo images', () => {
      cy.get('.productList').find('img')
        .should('be.visible')
        .and(($img) => {
          // "naturalWidth" and "naturalHeight" are set when the image loads
          expect($img[0].naturalWidth).to.be.greaterThan(0)
          expect($img.length).to.be.greaterThan(19)
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
          expect($img.length).to.be.greaterThan(5)
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

  describe('Adding to Cart', () => {
    it('should add product to cart after clicking the button', () => {
      // Open product page
      cy.get('.productList').find('img')
        .and(($img) => {
          $img[0].click()
        })

      // Test the item is in cart
      cy.get('.productTitle')
        .then(($elem) => {
          let productName = $elem.text()
          cy.log($elem.text())

          // Click button
          cy.get('.addToCartBtn')
            .should('be.visible')
            .click()

          // Navigate to cart
          clickHeaderLink(2)

          cy.get('h2')
            .should('contain.text', 'Cart')

          cy.get('.productTitle').should('be.visible');

          cy.get('.removeBtn').click()

          cy.get('.productTitle').should('not.exist');
        })
    })
  })

  describe('Checking out Cart to Order', () => {
    it('should add product to cart after clicking the button', () => {
      // navigate home
      cy.get('header')
        .should('be.visible')
        .within(() => {
          cy.get('h1').click()
        })

      // choose a product
      cy.get('.productList').find('img')
        .and(($img) => {
          $img[5].click()
        })

      // add to cart
      cy.get('.addToCartBtn').click()

      // navigate to cart
      clickHeaderLink(2)

      // checkout order
      cy.get('.productTitle')
        .should('be.visible')

      cy.get('.checkoutBtn')
        .should('be.visible')
        .click()

      // Navigate to account page
      clickHeaderLink(3)

      // Navigate to orders page
      cy.contains('Orders').click()

      // Test the order details 
      cy.contains('Order ID').should('be.visible');
      cy.get('.productTitle').should('be.visible');
      cy.contains('Address').should('be.visible');
      cy.contains('Total').should('be.visible');
      cy.contains('Date').should('be.visible');
    })
  })
})