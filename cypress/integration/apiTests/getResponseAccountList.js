describe("get response test", () => {

    it('get response', () => {

        cy.request("http://localhost:3000/AccList").then((response) => { //'GET' is default method an we remove it here and still works
            expect(response).to.have.property("status", 200)
            expect(response.body).to.not.be.null //shows that body is not empty, hase some contents..
        })
    })


})