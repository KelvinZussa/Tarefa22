/// <reference types="cypress" />

export const signUp = {
    opensignUp(login2){
        return cy.get (`[data-testid="${login2}"]`).click()
    }
}


