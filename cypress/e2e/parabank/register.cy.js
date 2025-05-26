/// <reference types = "cypress"/>
import dayjs from "dayjs"
import isBetween from 'dayjs/plugin/isBetween'
dayjs.extend(isBetween)
describe("test alerts and popups",()=>{
    
    beforeEach(() => {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get("#loginPanel").within(()=>{
            cy.get("input[type ='text']").type("nikesh")
            cy.get("input[type ='password']").type("Nikesh@123")
            cy.get("input[type='submit']").should("have.value","Log In").click()
        })
    })

    it("test alert",()=>{
       cy.visit("https://parabank.parasoft.com/parabank/findtrans.htm")
        cy.date("#fromDate","2025","00","15")
        cy.date("#toDate","2025","11","15")
        cy.get('#findByDateRange').click()
        let dates
        let datesss
        const fromDate = dayjs("2025-03-15","YYYY-MM-DD")
        const toDate = dayjs("2025-11-15","YYYY-MM-DD")
        cy.get("table tbody tr").find("td:first-child").each(($el,index)=>{
            dates = $el.text().trim()
            datesss = dayjs(dates,"MM-DD-YYYY")
            datesss.format('YYYY-MM-DD')
            expect(datesss.isBetween(fromDate,toDate)).to.be.true
        })
    


    })

})