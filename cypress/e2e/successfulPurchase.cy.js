import homeVinotecaPage from "../pages/vinoteca/homeVinotecaPage"
require('dotenv').config();

describe('Compra exitosa en plataforma', () => {

  beforeEach(() => {
    //Maximizar la pantalla
    cy.viewport(1920, 1080)
    //Visitar la URL
    cy.visit('https://www.vinoteca.com')
  });

  it('Compra exitosa', () => {
    //Verificar antes que no hay botones de alerta/aceptar cookies
    const aceptCookies = cy.get('.vicomstudio-modal-layout-0-x-closeButtonLabel').should('exist');
    if (aceptCookies) {
      cy.log('Botón Aceptar Cookies existe ---> Click');
      aceptCookies.click();
    } else {
      cy.log('Botón Aceptar Cookies NO existe ---> Continuar');
    }

    //Click en menú "Promociones"
    homeVinotecaPage.clickMenuPromociones();

  })
})