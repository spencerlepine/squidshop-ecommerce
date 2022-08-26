const { generateMockUser, logInUser } = require("./testHelpers");

const user = generateMockUser();

describe('The Home Page', () => {
  it('loads successfully', () => {
    cy.visit('http://localhost:3000')
  })

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


  it('should render title, departments, cart, and account links', () => {
    logInUser(cy, user)

    cy.get('header')
      .within(() => {
        cy.contains('SquidShop').should('be.visible')
        cy.contains('Departments').should('be.visible')
        cy.contains('Cart').should('be.visible')
        cy.contains('Account').should('be.visible')
      })
  })
})