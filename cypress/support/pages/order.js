/// <reference types="cypress" />

class order {
  get #btnOrder () { return cy.get('[href="/Tab/Order"]')}
  get #btnProcessing () {return cy.get('[data-testid="Placed"]')}
  get #firsItem () { return cy.get('[data-testid="item-0"]')}
  get #checkItem () { return cy.get('[data-testid="item-0"] > .r-eqz5dr')}


  checkOrder() {
    this.#btnOrder.click()
    this.#btnProcessing.click()
    this.#firsItem.click()
    this.#checkItem.should('contain', 'Smartphone Motorola Moto G24 Grafite 128GB')
  }

}

module.exports = new order();