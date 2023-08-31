class productoPage {
    elements = {
    agregarProductoAlCarrito: () => cy.get('.vtex-flex-layout-0-x-flexColChild > .vtex-button > .vtex-button__label'),
    ingresarAlCarrito: () => cy.get('.pa4 > .vtex-button > .vtex-button__label')
    }
    clickAgregarProductoAlCarrito(){
        //cy.intercept('/champagne-veuve-clicquot-ice-jacket-v-750-ml/p').as('champagne');
        //cy.wait('@champagne');
        this.elements.agregarProductoAlCarrito().click()
    }
    clickIngresarAlCarrito(){
        this.elements.ingresarAlCarrito().click()
    }

    }
    module.exports = new productoPage();