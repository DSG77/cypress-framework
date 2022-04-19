class DashboardPage { //here I am implementing page object model for Dashboard page for test maintenance approach and avoiding code duplication.
    // This class represents dashboard page in the task web application.
    //This Page class will contain all the locators of the WebElements of the task web page and methods.

    get createAccountButton() {
        return cy.get('#createaccbtn '); //getter function is returning our locator element 
    }

    get createTransactionButton() {
        return cy.get('#createtransbtn ');
    }

    get accountListButton() {
        return cy.get('#acclistbtn ');
    }

    get transactionsListButton() {
        return cy.get('#translistbtn ');
    }

    open() {
        cy.visit('http://localhost:3000/'); // 
    }




}
export default new DashboardPage();