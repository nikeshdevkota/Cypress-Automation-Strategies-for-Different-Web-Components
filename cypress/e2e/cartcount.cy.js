/// <reference types = "cypress"/>

describe("Cart Count",()=>{

    beforeEach(()=>{
        cy.loginwithsession("standard_user","secret_sauce")
    })

    it ("Verify Cart count",{ tags: 'JIRA-124' },()=>{
        cy.verifycartcount(3)
    })
})