describe('open up sign-in page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })
  it ('displays the product title', () => {
    cy.get('#title').should('exist')
    cy.get('#title').should('contain', 'Green Rank')
  })
  it ('has a google login button', () => {
    cy.get('#signInButton').should('be.visible');
    cy.get('#signInButton').should('contain', 'log in with google');
    cy.get('#signInButton').should('have.attr', 'href', '/auth/google')
    cy.get('#bypass').should('be.visible');
    cy.get('#bypass').click();
  })
})

describe('properly display homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })
  it ('displays a navbar', () => {
    cy.get('div').should('have.class', 'navBar');
  })
  it ('has navbar display product name', () => {
    cy.get('h2').should ('have.attr', 'id', 'navTitle');
    cy.get('h2').should('contain', 'Green Rank');
  })
  it ('has navbar display 4 buttons', () => {
    cy.get('Link').should(($link) => {
      expect($link).to.have.length(3)
    })
    cy.get('.navButtons').should(($link) => {
      expect($link).to.have.length(4)
    })
  })
  it ('displays 3 different graphs', () => {
    cy.get('table').should('exist');
    cy.get('#pie-chart').should('exist');
    cy.get('#bar-chart-div').should('exist');
  })
  // it ('navigate to About and back to Home', () => {
  //   cy.get('Link').last().click();
  //   cy.get('button').should('contain', 'Join us on our journey to reduce carbon emissions').click();
  //   cy.contains('Home').click();
  // })
})