class checkoutPage {
    elements = {
    procederAlPago: () => cy.get('.summary-template-holder > .clearfix > .btn-place-order-wrapper > #cart-to-orderform')
    }
    ClickProcederAlPago(){
        this.elements.procederAlPago().click()
    }
    }
    module.exports = new checkoutPage();