/// <reference types = "cypress"/>
describe("test autocomplete element",()=>{
    
    // before(() => {
    // })
    beforeEach(() => {
        cy.visit("https://demoqa.com/auto-complete")
        Cypress.on('uncaught:exception', () => false)
    })

   it("@JIRA-123 test auto-complete",()=>{
    cy.autocomplete(
        ".auto-complete__value-container--is-multi",
        "bl",".auto-complete__menu-list",
        "Blue")
   })
})