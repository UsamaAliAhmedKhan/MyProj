    /// <reference types="cypress" />

   import { inputText, navigate,search, validateAddToCart } from '../PageObjects/todo.js'

    describe('my first test' , () => {

        it('Visit Green Cart & Search a vegetable', () => {

           navigate()
           
           search()
    
        })
    
        it('add to cart Brocolli', () => {
    
            inputText()
                    
           validateAddToCart()
    
        })
    
        it('add to card Beans', () => {
    
            cy.get('.search-keyword').clear()
    
            cy.get('.search-keyword').type('Beans{enter}')
    
            cy.wait(2000)
    
            cy.get('.product-action > button').click()
    
            cy.get(':nth-child(1) > :nth-child(3) > strong').should('have.text', '2')
    
        })

        it('check elements', () => {

            cy.get('.search-keyword').clear()
    
            cy.get('.search-keyword').type('B')
    
            cy.wait(2000)

            cy.get('.products .product').should('have.length', 8)

        })

    })

   