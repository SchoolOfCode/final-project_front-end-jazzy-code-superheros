
   Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from
 // failing the test
   return false
   })

describe('visiting the website', () => {
  it('passes', () => {
    cy.visit('https://your-local-foodbank.netlify.app/')
  })
})

  it('Search with a location and wait to see if it will display the results', () => {
    cy.visit('https://your-local-foodbank.netlify.app/')
    cy.get('#inputbox').click('center').type('camden')
    cy.get(".button-input").click('center').then(() => {
      cy.contains('Please select a Food Bank:')
      cy.get('.search-results-container').should('not.have.text', 'Lewisham')
  })


  });

  
  it('Search with a postcode and wait to see if it will display the results', () => {
    cy.visit('https://your-local-foodbank.netlify.app/')
    cy.get('#inputbox').click('center').type('nw5 2dp')
    cy.get(".button-input").click('center').then(() => {
      cy.contains('Please select a Food Bank:')
      cy.get('.search-results-container').should('not.have.text', 'Lewisham')
      cy.get('.search-results-container').should('have.length', 5)
      cy.get('.search-results-container').contains('Chalk Farm').click()
  })
});