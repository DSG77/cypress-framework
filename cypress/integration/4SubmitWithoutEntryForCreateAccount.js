import CreateAccountPage from "../Page-Objects/CreateAccount-Page";
import DashboardPage from "../Page-Objects/Dashboard-Page";

describe('Creating an account', () => {

    it('Navigate to the application dashboard page and clicking Submit button without entering any information', () => {

        DashboardPage.open();
        DashboardPage.createAccountButton.click()

    });
    it('Clicking Submit button', () => {

        CreateAccountPage.accountSubmitButton.click()
        CreateAccountPage.succesAccountCreatedNotification
            .should('contains.text', 'Alert')
            .and('contains.text', 'Please fill in name.')


    });


});