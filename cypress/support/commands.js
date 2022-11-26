


 Cypress.Commands.add("Click", (selector,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').click()
    cy.wait(tiempo)
 })


 Cypress.Commands.add("Login_Principal", (email,contrasena,t) => {
    let tiempo=t
    cy.get('#dwfrm_login_username').should('be.visible').type(email)
    cy.wait(tiempo) 
    cy.get('#dwfrm_login_password').should('be.visible').type(contrasena)
    cy.wait(tiempo) 
   

})


Cypress.Commands.add("Click_Login", (selector,t) => { 
    let tiempo=t
    cy.get(selector).should('be.visible').click()
    
 })