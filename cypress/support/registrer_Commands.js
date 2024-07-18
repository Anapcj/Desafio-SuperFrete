///   <reference types="cypress" />

Cypress.Commands.add('SalvarCalculo', () => {
    cy.contains('CALCULAR FRETE COM DESCONTO')
        .should('be.visible')
        .click()
})