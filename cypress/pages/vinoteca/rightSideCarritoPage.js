class rightSideCarritoPage {

    elements = {
    irAlCheckout: () => cy.get('#proceed-to-checkout > .vtex-button__label')
    }
    ClickIrAlCheckout(){
        cy.wait(3000);
        this.elements.irAlCheckout().click()
    }
    }
    module.exports = new rightSideCarritoPage();