///   <reference types="cypress" />

const user_data = require('../fixtures/dimensoes.json')

Cypress.Commands.add('ValidaCEPOrigVazio', () => {
    cy.get('#originPostcode')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('ValidaPesoVazio', () => {
    cy.get('#weight')
        .should('be.visible')
        .click()
    cy.wait(1000)
        .contains('Digitar peso')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('ValidaAlturaVazio', () => {
    cy.get('#packageHeight-label')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('AlturaInvalida', () => {
    cy.get('#originPostcode')
        .should('be.visible')
        .type('08090-284')
    cy.get('#weight')
        .should('be.visible')
        .click()
    cy.wait(1000)
        .contains('Digitar peso')
        .should('be.visible')
        .click()
    cy.get('#userWrittenWeight')
        .type(user_data.weight)
    cy.wait(1000)
    cy.get('#packageHeight-label')
        .should('be.visible')
        .type('0.3')
    cy.get('#packageWidth-label')
        .should('be.visible')
        .type(user_data.width)
    cy.get('#packageDepth-label')
        .should('be.visible')
        .type(user_data.length)
    cy.get('#destinationPostcode-label')
        .should('be.visible')
        .type('05407-002')
})

Cypress.Commands.add('ValidaLarguraVazio', () => {
    cy.get('#packageWidth-label')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('LarguraInvalida', () => {
    cy.get('#originPostcode')
        .should('be.visible')
        .type('08090-284')
    cy.get('#weight')
        .should('be.visible')
        .click()
    cy.wait(1000)
        .contains('Digitar peso')
        .should('be.visible')
        .click()
    cy.get('#userWrittenWeight')
        .type(user_data.weight)
    cy.get('#packageHeight-label')
        .should('be.visible')
        .type(user_data.height)
    cy.get('#packageWidth-label')
        .should('be.visible')
        .type('7')
    cy.get('#packageDepth-label')
        .should('be.visible')
        .type(user_data.length)
    cy.get('#destinationPostcode-label')
        .should('be.visible')
        .type('05407-002')
})

Cypress.Commands.add('ValidaComprimentoVazio', () => {
    cy.get('#packageDepth-label')
        .should('be.visible')
        .click()

})

Cypress.Commands.add('ComprimentoInvalido', () => {
    cy.get('#originPostcode')
        .should('be.visible')
        .type('08090-284')
    cy.get('#weight')
        .should('be.visible')
        .click()
    cy.wait(1000)
        .contains('Digitar peso')
        .should('be.visible')
        .click()
    cy.get('#userWrittenWeight')
        .type(user_data.weight)
    cy.get('#packageHeight-label')
        .should('be.visible')
        .type(user_data.height)
    cy.get('#packageWidth-label')
        .should('be.visible')
        .type(user_data.width)
    cy.get('#packageDepth-label')
        .should('be.visible')
        .type('12')
    cy.get('#destinationPostcode-label')
        .should('be.visible')
        .type('05407-002')
})

Cypress.Commands.add('ValidaCEPDDestVazio', () => {
    cy.get('#destinationPostcode-label')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('calculaFrete', () => {
    cy.get('#originPostcode')
        .should('be.visible')
        .type('08090-284')
    cy.get('#weight')
        .should('be.visible')
        .click()
    cy.wait(1000)
        .contains('Digitar peso')
        .should('be.visible')
        .click()
    cy.get('#userWrittenWeight')
        .type(user_data.weight)
    cy.get('#packageHeight-label')
        .should('be.visible')
        .type(user_data.height)
    cy.get('#packageWidth-label')
        .should('be.visible')
        .type(user_data.width)
    cy.get('#packageDepth-label')
        .should('be.visible')
        .type(user_data.length)
    cy.get('#destinationPostcode-label')
        .should('be.visible')
        .type('05407-002')
})

Cypress.Commands.add('calculaFreteSemOrigem', () => {
    cy.get('#originPostcode')
        .should('be.visible')
    cy.get('#weight')
        .should('be.visible')
        .click()
    cy.wait(1000)
        .contains('Digitar peso')
        .should('be.visible')
        .click()
    cy.get('#userWrittenWeight')
        .type(user_data.weight)
    cy.get('#packageHeight-label')
        .should('be.visible')
        .type(user_data.height)
    cy.get('#packageWidth-label')
        .should('be.visible')
        .type(user_data.width)
    cy.get('#packageDepth-label')
        .should('be.visible')
        .type(user_data.length)
    cy.get('#destinationPostcode-label')
        .should('be.visible')
        .type('05407-002')
})

Cypress.Commands.add('calculaFreteSemDestino', () => {
    cy.get('#originPostcode')
        .should('be.visible')
        .type('08090-284')
    cy.get('#weight')
        .should('be.visible')
        .click()
    cy.wait(1000)
        .contains('Digitar peso')
        .should('be.visible')
        .click()
    cy.get('#userWrittenWeight')
        .type(user_data.weight)
    cy.get('#packageHeight-label')
        .should('be.visible')
        .type(user_data.height)
    cy.get('#packageWidth-label')
        .should('be.visible')
        .type(user_data.width)
    cy.get('#packageDepth-label')
        .should('be.visible')
        .type(user_data.length)
    cy.get('#destinationPostcode-label')
        .should('be.visible')
})

Cypress.Commands.add('SalvarInfoOrig', () => {
    cy.get('#originPostcode')
        .should('be.visible')
        .type('08090-284')
    cy.get('#weight')
        .should('be.visible')
        .click()
    cy.wait(1000)
        .contains('Digitar peso')
        .should('be.visible')
        .click()
    cy.get('#userWrittenWeight')
        .type(user_data.weight)
    cy.get('#packageHeight-label')
        .should('be.visible')
        .type(user_data.height)
    cy.get('#packageWidth-label')
        .should('be.visible')
        .type(user_data.width)
    cy.get('#packageDepth-label')
        .should('be.visible')
        .type(user_data.length)
    cy.contains('Salvar')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('LimparInfo', () => {
    cy.get('#originPostcode')
        .should('be.visible')
        .type('08090-284')
    cy.get('#weight')
        .should('be.visible')
        .click()
    cy.wait(1000)
        .contains('Digitar peso')
        .should('be.visible')
        .click()
    cy.get('#userWrittenWeight')
        .type(user_data.weight)
    cy.get('#packageHeight-label')
        .should('be.visible')
        .type(user_data.height)
    cy.get('#packageWidth-label')
        .should('be.visible')
        .type(user_data.width)
    cy.get('#packageDepth-label')
        .should('be.visible')
        .type(user_data.length)
    cy.get('#destinationPostcode-label')
        .should('be.visible')
        .type('05407-002')
    cy.contains('Limpar')
        .click()
})






