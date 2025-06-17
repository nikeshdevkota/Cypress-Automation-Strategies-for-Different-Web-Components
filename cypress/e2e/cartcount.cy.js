/// <reference types = "cypress"/>

describe("Cart Count",()=>{

    beforeEach(()=>{
        cy.loginwithsession("standard_user","secret_sauce")
    })

    it ("@JIRA-124 Verify Cart count",()=>{
        cy.verifycartcount(3)
    })
})