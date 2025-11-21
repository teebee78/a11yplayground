describe('Dashboard Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.login('lucky@luke.com', 'jolly');
    cy.contains('Dashboard');
    cy.contains("lucky@luke.com");
    cy.checkA11y();
  })
});

