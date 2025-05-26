import {faker} from "@faker-js/faker"
import dayjs from "dayjs"
/// <reference types = "cypress"/>

Cypress.Commands.add("login",(email,password,text) =>{
    cy.get("input[type ='email']").type(email)
    cy.get("input[type ='password']").type(password)
    cy.get("button").contains(text).click()
})

Cypress.Commands.add("logiwithsession",(email,password, url) =>{
    cy.session([email,password],()=>{
        cy.visit(Cypress.config('baseUrl'))
        cy.login(email,password,"Sign in")
        cy.url().should("eq",Cypress.config('baseUrl') + url)
    })
})

Cypress.Commands.add("verifytableheaders",(tableheaderlist)=>{
    cy.get("table thead tr th").each(($el,index,)=>{
        cy.wrap($el).should('have.text',tableheaderlist[index])
    })
})

Cypress.Commands.add("verifytablevalues",(tablevaluelist,rowindex)=>{
    cy.get("table tbody").find("tr").eq(rowindex).find("td").each(($el,index,$list)=>{
        if (index === $list.length - 1) return
        cy.wrap($el).should('have.text',tablevaluelist[index])
    })
})

Cypress.Commands.add("generatedata",()=>{
    let random_data = {
        "city": faker.location.city(),
        "country": faker.location.country(),
        "firstName":faker.person.firstName(),
        "lastName":faker.person.lastName(),
        "email":`nikesh.devkota+${Date.now()}@ebpearls.com`,
        "password":faker.internet.password()
    }
    cy.writeFile('./cypress/fixtures/faker_data.json', random_data)
})

Cypress.Commands.add("handleiframes",(iframeSelector)=>{
    return cy.get(iframeSelector)
    .its('0.contentDocument.body') 
    .should('not.be.empty')
    .then(cy.wrap)
})

Cypress.Commands.add('getNestedIframeBody', (outerSelector, innerSelector) => {
  return cy.handleiframes(outerSelector).then($outer => {
    return cy.wrap($outer)
      .find(innerSelector)
      .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap);
  });
});

Cypress.Commands.add("accordian",(index,visibility)=>{
    cy.get("#accordianContainer").find(".accordion").find(".card").eq(index).within(() => {
    cy.get('.card-header').click();
    cy.get('.card-body').should(visibility);
});
})

Cypress.Commands.add("autocomplete",(element,subtext,dropdown,text)=>{
    cy.get(element).type(subtext)
    cy.get(dropdown).contains(text).click()
})

Cypress.Commands.add("datePickerMonthYearInput",(element,month,monthvalue,year,yearvalue,week,weakvalue)=>{
    cy.get(element).within(()=>{
        cy.get(month).select(monthvalue)
        cy.get(year).select(yearvalue)
        cy.get(week).contains(weakvalue).click()
    })
})

Cypress.Commands.add("datePickerTime",(monthvalue,yearvalue,week,weakvalue,timevalue)=>{
    cy.get(".react-datepicker__month-dropdown-container").click()
    cy.get(".react-datepicker__month-dropdown")
    .find(".react-datepicker__month-option")
    .contains(monthvalue)
    .click()
    cy.get(".react-datepicker__year-dropdown-container").click()
    cy.get(".react-datepicker__year-dropdown")
    .find(".react-datepicker__year-option")
    .contains(yearvalue)
    .click()
    cy.get(week).contains(weakvalue).click()
    cy.get(".react-datepicker__time-list").within(()=>{
        cy.get("li").contains(timevalue).click({ force: true })
    })
})


Cypress.Commands.add("sort",(filter)=>{
    cy.get(".product_sort_container").select(filter)
})

Cypress.Commands.add("sortByPrice",(order)=>{
    cy.get(".inventory_container").find(".inventory_list").find(".inventory_item_price").then(($prices)=>{
        const priceValues = [...$prices].map(el =>
                                parseFloat(el.innerText.replace('$', '')))
        
        let sortedarray
        if (order == "descending")
            {
            sortedarray = [...priceValues].sort((a, b) => b - a);
        }
        else if (order == "ascending")
        {
        
             sortedarray = [...priceValues].sort((a, b) => a - b);
        }
        expect(priceValues).to.deep.equal(sortedarray);
    })
})

Cypress.Commands.add("sortByName",(order)=>{
    cy.get(".inventory_container").find(".inventory_list").find(".inventory_item_name").then(($names)=>{
        const nameValues = [...$names].map(el=>{
            el.innerHTML.trim()})
        let sortedNames
        if (order == "ascending"){
            sortedNames = [...nameValues].sort((a,b)=>a.localeCompare(b))
        }
        else if (order == "descending"){
            sortedNames = [...nameValues].sort((a,b)=>b.localeCompare(a))
        }
        expect(nameValues).to.deep.equal(sortedNames)
        })
})

Cypress.Commands.add("filterCategory",(category)=>{
    cy.get(".mantine-Accordion-label").contains(category).click()
})

Cypress.Commands.add("verifyFilter",(value)=>{

    const priceFilters = {
    "0": { min: 0, max: 100, label: "0-$100" },
    "1": { min: 100, max: 250, label: "$100-$250" },
    "2": { min: 250, max: 300, label: "$250-$300" },
    "3": { min: 300, max: Infinity, label: "$300+" }
    }
    // Use the value, or fallback to "3"
    const filter = priceFilters[value] || priceFilters["3"];
    // Check the corresponding checkbox
    cy.get(`input[type='checkbox'][data-label='${filter.label}']`)
    .should('have.attr', 'data-label', filter.label)
    .check()
    cy.get(".mantine-1ob1mxd").find(".text-primary").each(($price) => {
        const priceText = $price.text().replace('From $', '').trim();
        const price = parseFloat(priceText);
        expect(price).to.be.gte(filter.min);
        if (filter.max !== Infinity) {
            expect(price).to.be.lte(filter.max);
        }
    })

})

Cypress.Commands.add("verifycartcount",(count)=>{
    cy.get(".inventory_item_description").find(".pricebar").each(($el,index)=>{
        if (index < count)
            {
                cy.wrap($el).find("button").contains("Add to cart").click()
        }
    })
    cy.get(".shopping_cart_container").find(".shopping_cart_badge").should("have.text",count.toString())
})


Cypress.Commands.add("date",(dateinput,year,month,day)=>{
  const myDate= dayjs().set("year", year).set("month", month).set("date", day).format("MM-DD-YYYY")
   cy.get(dateinput).type(myDate)
  
    // const today = dayjs().format('YYYY-MM-DD');
    // const pastDate = dayjs().subtract(7, 'day').format('YYYY-MM-DD'); // 7 days ago
    // const futureDate = dayjs().add(7, 'day').format('YYYY-MM-DD'); //

})