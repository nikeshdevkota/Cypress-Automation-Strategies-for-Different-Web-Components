/// <reference types = "cypress"/>
describe("test droppable element",()=>{
    
    beforeEach(() => {
        cy.visit("https://demoqa.com/droppable")
        Cypress.on('uncaught:exception', () => false)
    })

   it("@JIRA-127 test droppable",()=>{
    cy.get('#draggable')
    .should("have.text","Drag me")
    .drag("#droppable",{force: true})
   })
})

