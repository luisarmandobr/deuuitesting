class promocionesPage {

    elements = {
    linkProductoBuscado: () => cy.get('a[href*="/tequila-cuervo-1800-cristalino-700-ml/p"]')
    }
    clickProductoBuscado(){
        this.elements.linkProductoBuscado().click()
    }
    }
    module.exports = new promocionesPage();