/// <reference types = "cypress"/>
describe("test alerts and popups",()=>{
    
    before(() => {
        Cypress.on('uncaught:exception', () => false)
    })

    beforeEach(() => {
        cy.visit("https://demoqa.com/alerts")
    })

    it("test alert",{ tags: 'JIRA-122' },()=>{
        cy.get(".row").find(".col").find("[type ='button']").contains("Click me").click()
        cy.on('window:alert',(text)=>{
            expect(text).to.eq("You clicked a button")
            // return true
        })       
    })

    it("test confirm",{ tags: 'JIRA-122' },()=>{
        cy.get(".mt-4.row").find(".col").find("#confirmButton").contains("Click me").click()
        cy.on('window:alert',(text)=>{
            expect(text).to.eq("Do you confirm action?")
            return true
        })       
    })

    it("test prompt",{ tags: 'JIRA-122' },()=>{
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('CypressUser')
        }) 
        cy.get(".mt-4.row").find(".col").find("#promtButton").contains("Click me").click()     
        cy.pause()
    })

})