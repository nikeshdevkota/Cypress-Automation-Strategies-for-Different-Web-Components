/// <reference types = "cypress"/>
describe("test tooltip element",()=>{
    
    // before(() => {
    // })
    beforeEach(() => {
        cy.visit("https://demoqa.com/tool-tips")
        Cypress.on('uncaught:exception', () => false)
    })

   it("test tooltip",{ tags: 'JIRA-131' },()=>{
    cy.get("#toolTipButton").trigger("mouseover")
    cy.get(".tooltip-inner").should("have.text","You hovered over the Button")
   })
})

