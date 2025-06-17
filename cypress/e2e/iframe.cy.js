/// <reference types = "cypress"/>

describe("test iframes",()=>{
    beforeEach(function(){
        cy.on("uncaught:exception",()=>false)
    })
    // beforeEach(function(){
    //     cy.visit("https://demoqa.com/frames")
    // })
    it("verify iframe test",{ tags: 'JIRA-128' },()=>{
        cy.visit("https://demoqa.com/frames")
        cy.handleiframes("iframe[id='frame1']")
        .find("#sampleHeading")
        .should("have.text","This is a sample page") 
         cy.handleiframes("iframe[id='frame2']")
        .find("#sampleHeading")
        .should("have.text","This is a sample page") 
    })
     it("verify nestediframe test",{ tags: 'JIRA-128' },()=>{
        cy.visit("https://demoqa.com/nestedframes")
        cy.getNestedIframeBody("iframe[id='frame1']","iframe[srcdoc$='<p>Child Iframe</p>']")
        .find('p')
        .should("include.text","Child Iframe") 
        cy.pause()
    })
})