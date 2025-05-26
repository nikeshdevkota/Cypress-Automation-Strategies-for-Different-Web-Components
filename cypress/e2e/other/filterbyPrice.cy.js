/// <reference types = "cypress"/>

describe("Verify Filter functionality",()=>{
    
    beforeEach(()=>{
        cy.visit("https://www.onewardrobe.com.au/auth/login")
        cy.get("form").eq(0).within(()=> {
            cy.get("#mantine-R2r6lb6").should("have.attr","maxlength","250").type("nikesh.devkota@ebpearls.com")
            cy.get("#mantine-R4r6lb6").type("Nikesh@123")
            cy.get("button").contains("Login").click()

        })
        cy.url().should("include","/lending/dashboard")
        cy.visit("https://www.onewardrobe.com.au/clothing?page=1")

        })

    context("Verify Filter by price",()=>{
        
        it("Verify elements that have price range 0-100",()=>{
            cy.filterCategory("Price")
            cy.verifyFilter("0")
        })

        it("Verify elements that have price range 100-250",()=>{
            cy.filterCategory("Price")
            cy.verifyFilter("1")
        })

         it("Verify elements that have price range 250-300",()=>{
            cy.filterCategory("Price")
            cy.verifyFilter("2")
        })

         it("Verify elements that have price range 300+",()=>{
            cy.filterCategory("Price")
            cy.verifyFilter("3")
        })
    })
})