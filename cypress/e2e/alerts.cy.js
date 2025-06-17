/// <reference types = "cypress"/>
describe("test alerts and popups",()=>{
    
    before(() => {
        Cypress.on('uncaught:exception', () => false)
    })

    beforeEach(() => {
        cy.visit("https://demoqa.com/alerts")
    })

    it("@JIRA-122 test alert",()=>{
        cy.get(".row").find(".col").find("[type ='button']").contains("Click me").click()
        cy.on('window:alert',(text)=>{
            expect(text).to.eq("You clicked a button")
            // return true
        })       
    })

    it("@JIRA-122 test confirm",()=>{
        cy.get(".mt-4.row").find(".col").find("#confirmButton").contains("Click me").click()
        cy.on('window:alert',(text)=>{
            expect(text).to.eq("Do you confirm action?")
            return true
        })       
    })

    it("@JIRA-122 test prompt",()=>{
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('CypressUser')
        }) 
        cy.get(".mt-4.row").find(".col").find("#promtButton").contains("Click me").click()     
        cy.pause()
    })

})