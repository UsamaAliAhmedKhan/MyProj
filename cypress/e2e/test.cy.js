/// <reference types ="cypress" />

describe('My Test Case', () => {

before('navigate to google', () => {

    cy.visit('https://www.google.com')
})

it('navigate to google', () => {

    cy.get('input[name="q"]').type('Docker{enter}')
} )

})