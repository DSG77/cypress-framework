import DashboardPage from "../Page-Objects/Dashboard-Page";

describe('Checking the buttons on dashboard', () => {

    it('Navigate to the application dashboard page and check buttons', () => {

        DashboardPage.open();
        DashboardPage.createAccountButton.should('contains.text', 'Create Account')
        DashboardPage.createTransactionButton.should('contains.text', 'Create Transaction')
        DashboardPage.accountListButton.should('contains.text', 'Accounts List')
        DashboardPage.transactionsListButton.should('contains.text', 'Transactions List')



        // cy.get('div.text-center').find('#button').should('have.length ', 4)

    });

});