/// <reference types ="Cypress"/>

describe("get response test", function() {

        it('get response', function() {

            cy.request("http://localhost:3000/").then((res) => {
                expect(res).to.have.property("status", 200)
                expect(res.body).to.not.be.null //shows that body is not empty, hase some contents..
            })
        })


    })
    /**describe('get response test', () => {

        it('get response', () => {

            cy.request({

                method: 'GET',
                url: 'http://localhost:3000/',
                headers: {
                    'authorization': "Bearer "
                }

            }).then((res) = > {
                expect(res.status).to.eq(200)
            })
        })


    }) */