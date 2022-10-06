/// <reference types ="cypress" />

describe('My Test Case', () => {

    before('navigate to git', () => {
    
        cy.visit('https://github.com/')
    })
    
    it('navigate to google', () => {
    
        cy.get('div.width-full > :nth-child(2) > .d-inline-block').click()
    } )
    
    })