/// <reference types="Cypress" />

describe('Clearing account information by Clear button', () => {

    it('Navigate to the application dashboard page and clicking Create Account button', () => {

        cy.visit('http://localhost:3000/')
        cy.get('#createaccbtn ').click()

    });
    it('Enetring information and clicking Clear', () => {
        cy.get('#owner').type('TesterCLR')
        cy.get('#balance').type('500')
        cy.get('#currency').select('EURO').wait(300);
        cy.get('#accountclear').click()
        cy.get('#owner').eq('') // eq ' ' empty value assortion is working
        cy.get('#balance').should('not.have.text') // should('not.have.text') empty value assortion is working
        cy.get('#currency').eq('         ') // eq '      ' empty value assortion is working also???




    });


});