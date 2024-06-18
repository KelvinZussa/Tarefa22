/// <reference types="cypress" />

class selectProduto{
    get #produto () { return cy.get('[data-testid="home-product-list"] > [style="padding-right: 10px; padding-left: 10px;"] > :nth-child(1) > [style="margin: 5px 7px; border-color: rgb(128, 128, 128); border-width: 0.5px; border-radius: 15px; width: 414px;"] > [data-testid="productDetails"]')}
    get #btnaddCart () {return cy.get('[data-testid="addToCart"]')}
    get #btncontPayment() {return cy.get('[data-testid="selectAddressOrContinueToPayment"]')}
    get #btnCheckout () { return cy.get('[data-testid="completeCheckout"]')}
    get #btnHome () { return cy.get('[data-testid="goBackHome"]')}

    orderproduct () {
        this.#produto.click()
        this.#btnaddCart.click()
        this.#btncontPayment.click()
        this.#btnCheckout.click()
        this.#btnHome.click()
    }

    }

    module.exports = new selectProduto();