describe("get response test", () => {

    it('get response', () => {

        cy.request('GET', "http://localhost:3000/CreateAccount").then((response) => {
            expect(response).to.have.property("status", 200)
            expect(response.body).to.not.be.null //shows that body is not empty, hase some contents..
        })




    })

})