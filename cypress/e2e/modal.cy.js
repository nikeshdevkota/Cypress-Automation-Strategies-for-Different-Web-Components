/// <reference types = "cypress"/>
describe("test modal elements",()=>{
    
    // before(() => {
    // })
    beforeEach(() => {
        cy.visit("https://demoqa.com/modal-dialogs")
        Cypress.on('uncaught:exception', () => false)
    })

   it("test modal",{ tags: 'JIRA-129' },()=>{
    cy.get("#showSmallModal").contains("Small modal").click()
    cy.get(".modal-content").within(()=>{
        cy.get(".modal-header").contains("Small Modal")
        cy.get(".modal-body").contains("This is a small modal. It has very less content")
        cy.get(".modal-footer").find("#closeSmallModal").contains("Close").click()
    })
   })
})

// https://docs.cypress.io/api/commands/within