class homeVinotecaPage {
elements = {
menuPromociones: () => cy.get('.vtex-menu-2-x-menuContainer--Menu--Desktop > :nth-child(5) > .vtex-menu-2-x-styledLinkContainer > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent') 
}
clickMenuPromociones(){
    this.elements.menuPromociones().click()
}
}
module.exports = new homeVinotecaPage();