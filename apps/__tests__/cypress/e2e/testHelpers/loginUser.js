const updateCookies = require('./updateCookies');

module.exports = (cy, user) => {
  cy.setCookie('accessToken', '')
  cy.setCookie('refreshToken', '')

  cy.visit('http://localhost:3000/signup')

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
  cy.get('button[type="submit"]')
    .should('be.visible')
    .click()

  cy.visit('http://localhost:3000/login')

  cy.get('#email')
    .should('be.visible')
    .type(user.email)
  cy.get('#password')
    .should('be.visible')
    .type(user.password)
  cy.get('button[type="submit"]')
    .should('be.visible')
    .click()

  updateCookies(cy, user)
}