const { generateMockUser, updateCookies } = require("./testHelpers");

const user = generateMockUser();

describe('Registration/Login', () => {
  it('should have access to login/signup pages', () => {
    cy.visit('http://localhost:3000/login')
    cy.contains('Sign In').should('be.visible')
    cy.contains('Don\'t have an account? Sign Up').should('be.visible')
    cy.visit('http://localhost:3000/signup')
    cy.contains('Sign Up').should('be.visible')
  })

  it('should reject invalid registration form input', () => {
    cy.visit('http://localhost:3000/signup')

    cy.get('#firstName')
      .should('be.visible')
      .type('John')
    cy.get('#lastName')
      .should('be.visible')
      .type('Doe')
    cy.get('#email')
      .should('be.visible')
      .type('badEmail')
    cy.get('#password')
      .should('be.visible')
      .type('xyz')
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
    cy.contains('Unable to create account')
      .should('be.visible')
      .click()
  })

  it('should register valid user account', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Sign In').click()
    cy.contains('Don\'t have an account? Sign Up').click()

    cy.get('#firstName')
      .should('be.visible')
      .type(user.firstName)
    cy.get('#lastName')
      .should('be.visible')
      .type(user.lastName)
    cy.get('#email')
      .should('be.visible')
      .type(user.email)
    cy.get('#password')
      .should('be.visible')
      .type(user.password)
    // cy.get('#rememberMe')
    //   .should('be.visible')
    //   .check()
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
  })

  it('should login valid user account', () => {
    cy.contains('Don\'t have an account? Sign Up').should('be.visible')

    cy.get('#email')
      .should('be.visible')
      .type(user.email)
    cy.get('#password')
      .should('be.visible')
      .type(user.password)
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()

    // The following is broken.
    // Cypress is ignoring the HttpOnly cookies
    // It will not store or forward these tokens from the client
    // cy.getCookies()
    //   .should('have.length', 2)
    //   .then((cookies) => {
    //     expect(cookies[0]).to.have.property('name', 'accessToken')
    //     expect(cookies[0]).to.have.property('httpOnly')
    //     expect(cookies[0]).to.have.property('secure')
    //     expect(cookies[1]).to.have.property('name', 'refreshToken')
    //     expect(cookies[1]).to.have.property('httpOnly')
    //     expect(cookies[1]).to.have.property('secure')
    // expect(cookies[0]).to.have.property('value', '123ABC')
    // expect(cookies[0]).to.have.property('domain')
    // expect(cookies[0]).to.have.property('path')

    updateCookies(cy, user)
  })

  describe('When Logged IN', () => {
    beforeEach(() => {
      updateCookies(cy, user)
    })

    it('should have access to account page when logged in', () => {
      cy.contains('Account').click()
      cy.contains(user.firstName).should('be.visible')
    })

    it('should have access to orders page when logged in', () => {
      cy.contains('Orders').click()
      cy.contains('Orders').should('be.visible')
    })

    it('should have access to cart page when logged in', () => {
      cy.contains('Account').click()
      cy.contains('Cart').click()
      cy.contains('Cart').should('be.visible')
      cy.contains('Checkout').should('be.visible')
    })

    it('should properly log out', () => {
      cy.contains('Account').click()
      cy.contains('Logout').click()
      cy.contains('Account').should('not.exist');
      cy.contains('Sign In').should('exist');
    })
  })
})