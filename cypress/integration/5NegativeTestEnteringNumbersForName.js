import CreateAccountPage from "../Page-Objects/CreateAccount-Page";
import DashboardPage from "../Page-Objects/Dashboard-Page";

// here we will do negative test for owner field. Owner should receive a text -string- not a number
describe('Creating an account', () => {

    it('Navigate to the application dashboard page and clicking Create Account button', () => {

        DashboardPage.open();
        DashboardPage.createAccountButton.click()

    });
    it('Creating an Account and submitting', () => {
        CreateAccountPage.ownerEntryLine.type('123456789')
        CreateAccountPage.balanceEntryLine.type('500')
        CreateAccountPage.currencySelectionLine.select('EURO').wait(300);
        CreateAccountPage.accountSubmitButton.click()
        CreateAccountPage.succesAccountCreatedNotification
            .should('contain.text', 'AlertName should contain text.') //Test will fail here because number is accapted and notification does not match my entered Alert message (Alert is documented by critical thinking) 
            /**there is no clear requirement but
            for critical thinking I assume that
            name should contain string only and numbers should not be accapted.
            Regarding that there should be a proper Alert notification as I documented here in assortion.*/


    });


});