/// <reference types="cypress" />

export const profile = {
    openProfile(login){
        return cy.get(`[href="/Tab/${login}"]`).click()
    }
}