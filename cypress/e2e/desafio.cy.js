///   <reference types="cypress" />

const user_data = require('../fixtures/dimensoes.json')

import page_Commands from '../support/page_Commands'
import menssages_Commands from '../support/menssages_Commands'
import registrer_Commands from '../support/registrer_Commands'

describe('Validação Tela Calculo Frete', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://web.superfrete.com/')
    cy.wait(10000)
  })

  it('Validar Campo CEP de origem Vazio', () => { //ok.

    cy.ValidaCEPOrigVazio()
    cy.SalvarCalculo()
    cy.MensagemErroCEPOring('CEP de origem é obrigatório')

  })

  it('Validar Campo Peso Vazio', () => {

    cy.ValidaPesoVazio()
    cy.SalvarCalculo()
    cy.MensagemErroPeso('peso é obrigatório')

  })

  it('Validar Campo Altura Vazio', () => {

    cy.ValidaAlturaVazio()
    cy.SalvarCalculo()
    cy.MensagemErroAltura('Altura mínima 0.4 cm.')

  })

  it('Campo Altura Inválida', () => {

    cy.AlturaInvalida()
    cy.SalvarCalculo()
    cy.MensagemErroAltura('Altura mínima 0.4 cm.')

  })

  it('Validar Campo Largura Vazio', () => {

    cy.ValidaLarguraVazio()
    cy.SalvarCalculo()
    cy.MensagemErroLargura('Largura mínima 8 cm.')

  })

  it('Campo Largura Inválida', () => {

    cy.LarguraInvalida()
    cy.SalvarCalculo()
    cy.MensagemErroLargura('Largura mínima 8 cm.')

  })

  it('Validar Campo Comprimento Vazio', () => {

    cy.ValidaComprimentoVazio()
    cy.SalvarCalculo()
    cy.MensagemErroComprimento('Comprimento mínimo 13 cm.')

  })

  it('Campo Comprimento Inválido', () => {

    cy.ComprimentoInvalido()
    cy.SalvarCalculo()
    cy.MensagemErroComprimento('Comprimento mínimo 13 cm.')

  })

  it('Validar Campo CEP de destino Vazio', () => {

    cy.ValidaCEPDDestVazio()
    cy.SalvarCalculo()
    cy.MensagemErroCEPDest('CEP de destino é obrigatório')

  })

  it('Calcular Frete', () => {

    cy.calculaFrete()
    cy.SalvarCalculo()

  })

  it('Cálculo do Frete sem CEP de origem', () => {

    cy.calculaFreteSemOrigem()
    cy.SalvarCalculo()
    cy.MensagemErroCEPOring()

  })

  it('Cálculo do Frete sem CEP de destino', () => {

    cy.calculaFreteSemDestino()
    cy.SalvarCalculo()
    cy.MensagemErroCEPDest()

  })

  it.only('Salvar Informações da Origem', () => {

    cy.SalvarInfoOrig()
    cy.MensagemSucessSalvar('As informações do pacote atual foram salvas e estarão preenchidas na próxima vez que você abrir o aplicativo.')

  })

  it('Limpar Informações da Origem', () => {

    cy.LimparInfo()
    cy.MensagemSucessSalvar('As informações do pacote foram limpas.')

  })

})