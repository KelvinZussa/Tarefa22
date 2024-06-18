/// <reference types = "cypress" />

const {email, password} = require("../fixtures/data.json")




describe('Teste fluxo carrinho de compras', () => {

  
  it('Deve fazer fluxo checkout', () => {
   cy.login(email, password)
   

  })
})