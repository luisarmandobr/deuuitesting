import { faker } from '@faker-js/faker';

const email = "deuna1@mailinator.com";
const name = faker.person.firstName();
const lastname = faker.person.lastName();
const phone = "9998887776";

class checkoutShippingPage {
    elements = {
        clientEmail: () => cy.get('#client-email'),
        clientFirstName: () => cy.get('#client-first-name'),
        clientLastName: () => cy.get('#client-last-name'),
        clientPhone: () => cy.get('#client-phone'),
        optInNewsletter: () => cy.get('#opt-in-newsletter'),
        formTerms: () => cy.get('.form-terms'),
        buttonSubmit: () => cy.get('.btn-submit-wrapper')
    }
    writeClientEmail() {
        cy.wait(1000);
        this.elements.clientEmail().type(email)
    }
    writeClientFirstName() {
        cy.wait(1000);
        this.elements.clientFirstName().type(name)
    }
    writeClientLastName() {
        cy.wait(1000);
        this.elements.clientLastName().type(lastname)
    }
    writeClientPhone() {
        cy.wait(1000);
        this.elements.clientPhone().type(phone)
    }
    checkOptInNewsletter() {
        cy.wait(1000);
        this.elements.optInNewsletter().click()
    }
    checkFormTerms() {
        cy.wait(1000);
        this.elements.formTerms().click()
    }
    ClickButtonSubmit() {
        cy.wait(2000);
        this.elements.buttonSubmit().click()
    }
}
module.exports = new checkoutShippingPage();