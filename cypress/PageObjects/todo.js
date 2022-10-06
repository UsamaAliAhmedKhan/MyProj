

export function navigate(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

}
export function search(){

    cy.get('.search-keyword').type('Brocolli')
    
    cy.wait(3000)
}
export function inputText(){

    cy.get('.products > .product').should('contain' , 'Brocolli')
    
    cy.get('.product-action > button').click()
                    
    cy.wait(2000)
}
export function validateAddToCart(){

    cy.get(':nth-child(1) > :nth-child(3) > strong').should('contain' , '1')
}
