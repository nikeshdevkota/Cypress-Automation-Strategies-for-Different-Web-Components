/// <reference types= "cypress"/>

describe("API testing using Cypress",()=>{
    // beforeEach(function(){
         
    // })
        it("Verify successfull registration",()=>{
            cy.request({
            method:"POST",
            url: "https://reqres.in/api/register",
            headers: {'x-api-key': 'reqres-free-v1'},
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
                }
            }).then((response)=>{
                    expect(response.status).eq(200)
                    const token = response.body.token
                    window.localStorage.setItem('authToken',token)
                    })
                
        })
})
        
