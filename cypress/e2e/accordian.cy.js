/// <reference types = "cypress"/>
describe("test accordian element",()=>{
    
    // before(() => {
    // })
    beforeEach(() => {
        cy.visit("https://demoqa.com/accordian")
        Cypress.on('uncaught:exception', () => false)
    })

   it("@JIRA-121 test accordian",()=>{
    cy.accordian(0,'not.be.visible')
    cy.accordian(0,'be.visible')
   })
})

// https://docs.cypress.io/api/commands/within