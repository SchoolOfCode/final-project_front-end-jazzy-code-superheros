describe('visiting the website', () => {
  it('passes', () => {
    cy.visit('https://your-local-foodbank.netlify.app/')
  })
})

  it('displays the input and the botton to submit', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
  
    cy.visit('https://your-local-foodbank.netlify.app/')
    cy.get('button').then(($button) => {
      return new Cypress.Promise((resolve, reject) => {
        // do something custom here
      })
    })})