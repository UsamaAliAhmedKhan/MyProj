/// <reference types ="cypress" />

describe('My Test Case', () => {

before('navigate to google', () => {

    cy.visit('https://www.google.com')
})

it('enter docker in search bar', () => {

    cy.get('input[name="q"]').type('Docker{enter}')
} )

})