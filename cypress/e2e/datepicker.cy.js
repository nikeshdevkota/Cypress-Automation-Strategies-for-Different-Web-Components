/// <reference types = "cypress"/>
describe("test datepicker elements",()=>{
    beforeEach(() => {
        cy.visit("https://demoqa.com/date-picker")
        Cypress.on('uncaught:exception', () => false)
    })

   it("@JIRA-125 test datePickerMonthYearInput",()=>{
    cy.get("#datePickerMonthYearInput").click()
    cy.datePickerMonthYearInput(
        ".react-datepicker__month-container",
        ".react-datepicker__month-select",
        "April",
        ".react-datepicker__year-select",
        "2024",
        ".react-datepicker__day--001",
        "1"
    )
   })

   it("@JIRA-125 test datePickerMonthYearInput",()=>{
    cy.get("#dateAndTimePickerInput").click()
    cy.datePickerTime(
        "April",
        "2024",
        ".react-datepicker__day--001",
        "1",
        "09:30"
    )
        cy.pause()  
   })
})