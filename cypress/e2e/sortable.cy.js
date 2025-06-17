/// <reference types = "cypress"/>
describe("test sortable element",()=>{
    
    // before(() => {
    // })
    beforeEach(() => {
        cy.visit("https://demoqa.com/sortable")
        Cypress.on('uncaught:exception', () => false)
    })

   it("@JIRA-130 test sortable",()=>{
    cy.get('#demo-tab-list').click(); // Open the List tab
    // cy.get(".vertical-list-container > :nth-child(2)")
    // .drag(".vertical-list-container > :nth-child(4)",{force: true});
    // cy.get("div[class='vertical-list-container mt-4'] div:nth-child(2)").should('have.text',"Four") 
     // Define source and target
    cy.contains('.list-group-item', 'Two')
      .as('source');

    cy.contains('.list-group-item', 'Four')
      .as('target');

    // Perform drag and drop manually using mouse events
    cy.get('@source')
      .trigger('mousedown', { which: 1 });

    cy.get('@target')
      .trigger('mousemove')
      .trigger('mouseup', { force: true });
})
})

