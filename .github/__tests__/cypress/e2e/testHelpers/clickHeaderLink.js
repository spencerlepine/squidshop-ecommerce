module.exports = (cy, index) => {
  return cy.get('header')
    .within(() => {
      cy.get('a')
        .and(($links) => {
          $links[index].click()
        })
    })
}