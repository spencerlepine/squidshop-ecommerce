const { generateMockUser, logInUser, updateCookies, clickHeaderLink } = require("./testHelpers");

const user = generateMockUser();

describe('The Cart Page', () => {
  it('loads successfully', () => {
    cy.visit('http://localhost:3000')
    logInUser(cy, user)
  })

  describe('Adding to Cart', () => {
    it('should add product to cart after clicking the button', () => {
      updateCookies(cy, user)

      // Open product page
      cy.get('.productList').find('img')
        .and(($img) => {
          $img[0].click()
        })

      // Test the item is in cart
      cy.get('.productTitle').should('exist')

      // Click ADD TO CART button
      cy.get('.addToCartBtn')
        .should('be.visible')
        .click()

      cy.contains('SquidShop').click()
      cy.contains('Cart').click()

      cy.get('.productTitle').should('be.visible');

      cy.get('.removeBtn').click()
      cy.get('.productTitle').should('not.exist');
    })
  })

  describe('Checking out Cart to Order', () => {
    it('should add product to cart after clicking the button', () => {
      updateCookies(cy, user)

      // navigate home
      cy.contains('SquidShop').click()

      // choose a product
      cy.get('.productList').find('img').first().click()

      cy.get('.addToCartBtn').click()

      // navigate to cart
      cy.contains('SquidShop').click()
      cy.contains('Cart').click()

      // checkout order
      cy.get('.productTitle')
        .should('be.visible')

      cy.get('.checkoutBtn')
        .should('be.visible')
        .click()
      cy.get('.productTitle').should('not.exist');

      // Navigate to account page
      clickHeaderLink(cy, 3)

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