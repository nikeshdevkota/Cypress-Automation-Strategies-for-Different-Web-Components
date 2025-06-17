/// <reference types = "cypress"/>
describe("test autocomplete element",()=>{
    
    // before(() => {
    // })
    beforeEach(() => {
        cy.visit("https://demoqa.com/auto-complete")
        Cypress.on('uncaught:exception', () => false)
    })

   it("test auto-complete",{ tags: 'JIRA-123' },()=>{
    cy.autocomplete(
        ".auto-complete__value-container--is-multi",
        "bl",".auto-complete__menu-list",
        "Blue")
   })
})