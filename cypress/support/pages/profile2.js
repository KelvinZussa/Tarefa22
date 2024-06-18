/// <reference types="cypress" />

class profile2 {
    get #email () { return cy.get('[data-testid="email"]')}
    get #password () { return cy.get('[data-testid="password"]')}
    get #btnlogin () { return cy.get('[data-testid="btnLogin"]')}

    openLogin (email, password){
        this.#email.type(email)
        this.#password.type(password)
        this.#btnlogin.click()
    }


}

module.exports = new profile2 ();