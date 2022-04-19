import CreateAccountPage from "../Page-Objects/CreateAccount-Page";
import DashboardPage from "../Page-Objects/Dashboard-Page";

describe('Creating an account', () => {

    it('Navigate to the application dashboard page and clicking Create Account button', () => {

        DashboardPage.open(); // this method is like calling this link -> cy.visit('http://localhost:3000/')
        DashboardPage.createAccountButton.click()

    });
    it('Creating an Account and submitting', () => {
        CreateAccountPage.ownerEntryLine.type('Tester Salih')
        CreateAccountPage.balanceEntryLine.type('65000')
        CreateAccountPage.currencySelectionLine.select('EURO').wait(300);
        CreateAccountPage.accountSubmitButton.click()
        CreateAccountPage.succesAccountCreatedNotification
            .should('contains.text', 'SuccessAccount has been successfully created.')



    });




});