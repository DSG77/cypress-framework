class CreateAccountPage {
    get ownerEntryLine() {
        return cy.get('#owner');
    }

    get balanceEntryLine() {
        return cy.get('#balance');
    }

    get currencySelectionLine() {
        return cy.get('#currency');
    }

    get accountSubmitButton() {
        return cy.get('#accountsubmit');
    }
    get succesAccountCreatedNotification() {
        return cy.get('div.notification-container');
    }
}
export default new CreateAccountPage();