// Cypress does not handle the HttpOnly cookies correctly, so we need to manually set them
const { generateAccessToken, generateRefreshToken } = require("./generateMockToken")

const updateCookies = (cy, user) => {
  cy.setCookie('accessToken', generateAccessToken(user))
  cy.setCookie('refreshToken', generateRefreshToken(user))
}

module.exports = updateCookies