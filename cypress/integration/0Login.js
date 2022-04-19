import * as globalNavigations from '../support/globalNavigations' //we call method from support globalNavigation method

describe('Login to the Application', () => {

    it('Navigate to the Application login page', () => {

        cy.visit('http://localhost:3000/') //this is commented out to bring method
        globalNavigations.libraryLoginPage()
    });
    // it('input email address and password', () => {
    /*We dont have login function on application. Because of that we skip this login part.
    It should be in requirement if there is login function -And for accounting perspective there should be actually - or not.*/
    //cy.get('#css locator for user name')
    //   .type('Username')
    //cy.get('#css locator for PW ')
    //   .type('****')
    // });

    // it('Click to the sign in button', () => {

    // }); 
});