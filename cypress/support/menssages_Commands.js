///   <reference types="cypress" />

Cypress.Commands.add('MensagemErroCEPOring', () => {
    cy.get('#originPostcode-helper-text')
        .should('be.visible')
})

Cypress.Commands.add('MensagemErroPeso', () => {
    cy.get('#userWrittenWeight-helper-text')
        .should('be.visible')
})

Cypress.Commands.add('MensagemErroAltura', () => {
    cy.get('#packageHeight-helper-text')
        .should('be.visible')
})

Cypress.Commands.add('MensagemErroLargura', () => {
    cy.get('#packageWidth-helper-text')
        .should('be.visible')
})

Cypress.Commands.add('MensagemErroComprimento', () => {
    cy.get('#packageDepth-helper-text')
        .should('be.visible')
})

Cypress.Commands.add('MensagemErroCEPDest', () => {
    cy.get('#destinationPostcode-helper-text')
        .should('be.visible')
})

Cypress.Commands.add('MensagemSucessSalvar', () => {
    cy.get('#notistack-snackbar')
        .should('be.visible')
})

Cypress.Commands.add('MensagemSucessLimpar', () => {
    cy.get('#notistack-snackbar')
        .should('be.visible')
})