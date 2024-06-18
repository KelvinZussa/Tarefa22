/// <reference types="cypress" />

class loginPage {
   get #firstName() { return cy.get('[data-testid="firstName"]')}
   get #lastName() { return cy.get('[data-testid="lastName"]')}
   get #phoneNumber() { return cy.get('[data-testid="phone"]')}
   get #email() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]')}
   get #password() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]')}
   get #repassword() { return cy.get('[data-testid="repassword"]')}
   get #btnCreate() { return cy.get('[data-testid="create"]')}

   createLogin(firstName, lastName, phoneNumber, email, password, repassword){
         this.#firstName.type(firstName)
         this.#lastName.type(lastName)
         this.#phoneNumber.type(phoneNumber)
         this.#email.type(email)
         this.#password.type(password)
         this.#repassword.type(repassword)
         this.#btnCreate.click()
   }

}

module.exports = new loginPage();
