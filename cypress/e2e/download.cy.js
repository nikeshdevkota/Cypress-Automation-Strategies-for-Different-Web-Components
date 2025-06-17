/// <reference types = "cypress" />

describe("practice downloading files in cypress",()=>{
    it("download files",{ tags: 'JIRA-126' },()=>{
        cy.visit("https://commitquality.com/practice-file-download")
        cy.get("button").contains("Download File").click()
        cy.readFile("./cypress/downloads/dummy_file.txt").should("exist")
    })
})