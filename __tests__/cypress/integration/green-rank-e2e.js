describe('open up homepage', () => {
  beforeEach(() => {
    cy.visit('https://localhost:8080')
  })
  it ('displays a logo', () => {
    cy.get('#logo').should('exist')
  })
  it ('has a google login button', () => {
    cy.get('#login').should('be.visible');
    cy.get('#login').should('contain', 'google');
    cy.get('#login').click();
  })
})