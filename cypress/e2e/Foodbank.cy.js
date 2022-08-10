
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

  it('displays the input and the botton to submit', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
  
    cy.visit('https://your-local-foodbank.netlify.app/')
    cy.get('#inputbox').click('center').type('camden')
    cy.get(".button-input").click('center').then(() => {
      console.log("This is to check the log")  // Log to check the async behaviour
  })

  });