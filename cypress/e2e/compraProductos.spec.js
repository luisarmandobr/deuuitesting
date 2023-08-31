import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

import homeVinotecaPage from "../pages/vinoteca/homeVinotecaPage";
import promocionesPage from "../pages/vinoteca/promocionesPage";
import productoPage from "../pages/vinoteca/productoPage";
import rightSideCarritoPage from "../pages/vinoteca/rightSideCarritoPage";
import checkoutPage from "../pages/vinoteca/checkoutPage";
import checkoutShippingPage from "../pages/vinoteca/checkoutShippingPage";

Cypress.once('uncaught:exception', (err, runnable) => {
    return false;
})
require('dotenv').config();

Given('un cliente con acceso a la plataforma {word}', (url) => {

    //Maximizar la pantalla
    cy.viewport(1920, 1080)
    //Visitar la URL
    cy.visit(url)

    //Verificar antes que no hay botones de alerta/aceptar cookies
    const aceptCookies = cy.get('.vicomstudio-modal-layout-0-x-closeButtonLabel').should('exist');
    if (aceptCookies) {
        cy.log('Botón Aceptar Cookies existe ---> Click');
        aceptCookies.click();
    } else {
        cy.log('Botón Aceptar Cookies NO existe ---> Continuar');
    }

})

When('seleccione los productos preferidos de la seccion {word}', (paginaPromociones) => {

    //Seleccionar menú "Promociones"
    homeVinotecaPage.clickMenuPromociones(paginaPromociones);
    cy.wait(3000);
    cy.scrollTo(0, 700);

    //Seleccionar producto
    promocionesPage.clickProductoBuscado();

    //Seleccionar Agregar al Carrito
    productoPage.clickAgregarProductoAlCarrito();

    //Ingresar al carrito
    productoPage.clickIngresarAlCarrito();

})

Then('podra realizar el pago de manera exitosa', () => {

    //Ir al checkout
    rightSideCarritoPage.ClickIrAlCheckout();

    //ProcederAlPago
    checkoutPage.ClickProcederAlPago();

    //Llenar formulario
    checkoutShippingPage.writeClientEmail()
    checkoutShippingPage.writeClientFirstName()
    checkoutShippingPage.writeClientLastName()
    checkoutShippingPage.writeClientPhone()
    checkoutShippingPage.checkOptInNewsletter()
    checkoutShippingPage.checkFormTerms()

    //Enviar formulario
    checkoutShippingPage.ClickButtonSubmit()

})