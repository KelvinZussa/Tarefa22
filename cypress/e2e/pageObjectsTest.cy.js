/// <reference types = "cypress" />

const loginPage = require("../support/pages/loginPage")
const { profile } = require("../support/pages/profile")
const { signUp } = require("../support/pages/signup")
const {firsName, lastName, phoneNumber, email, password, repassword} = require ('../fixtures/data.json')
const { profilePage } = require("../support/pages/profilePage")





describe('Teste de criação de conta', () => {

   beforeEach(() =>{
    cy.setCookie('EbacStoreVersion', 'v2', {domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
   })

  it('Deve criar uma nova conta', () => {
   profile.openProfile('Account')
   signUp.opensignUp('signUp')
   loginPage.createLogin(firsName, lastName, phoneNumber, email, password, repassword)
   profile.openProfile('Account')
   profilePage.customerName().should('contain', 'Santos Kelvin')

  })
})