describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.injectAxe()
    cy.contains('A11y playground')
    cy.checkA11y()
  })
})
