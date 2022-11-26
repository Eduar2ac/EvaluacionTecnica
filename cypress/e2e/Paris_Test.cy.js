/// <reference types='Cypress' />
require('cypress-xpath')
let tiempo=1000

describe('Casos Paris.cl', () =>{ 
    
  beforeEach(()=>{    
        cy.visit('https://www.paris.cl/'),
        cy.wait(tiempo)
        cy.xpath('//*[@id="navigation-new"]/div[3]/div/div/div[1]/div/button/div[1]').first().trigger('mouseover')
        cy.wait(tiempo)
        cy.xpath('//*[@id="navigation-new"]/div[3]/div/div/div[1]/div/button/div[1]').click({force:true}) 
        cy.wait(tiempo)
        cy.get('.header-popup__actions > .header-popup__actions-btn').should("be.visible").click()
        cy.Login_Principal("sogoji7230@xegge.com","Contrasena33",200)     
        cy.Click_Login('[style="margin-bottom: 20px;"] > .btn')
      
    })

    
    it('Caso de Prueba N° 1', () =>{
      
      cy.wait(tiempo)
      cy.xpath('//*[@id="navigation-new"]/div[3]/div/div/div[1]/div/button/div[1]').first().trigger('mouseover')
      cy.wait(tiempo)
      cy.xpath('//*[@id="navigation-new"]/div[3]/div/div/div[1]/div/button/div[1]').click({force:true}) 
      cy.wait(tiempo)

      if (cy.xpath("//*[@id='navigation-new']/div[3]/div/div/div[1]/div/div/div/div/div/div[2]/div[3]").should("be.visible")) {
        cy.log("Prueba Exitosa, se logra identificar la cuenta logeada")
      } else {
        cy.log("Prueba fallada, no se logra identificar la cuenta logeada")
       
      }
    })
    
    it('Caso de Prueba N° 2', () =>{
      cy.wait(1500)
      cy.xpath('//*[@id="navigation-new"]/div[3]/div/div/div[1]/div/button/div[1]').first().trigger('mouseover')
      cy.wait(tiempo)
      cy.xpath('//*[@id="navigation-new"]/div[3]/div/div/div[1]/div/button/div[1]').click({force:true}) 
      cy.wait(tiempo)

      cy.contains("Datos personales").should("be.visible").click()
      cy.wait(1500)
      cy.get('.tw-hidden > .tw-text-sm').click()
      cy.wait(tiempo)
      cy.get('.tw-flex > :nth-child(1) > .tw-relative > .tw-text-sm').clear()

      cy.get('.tw-bg-cyan-primary').click() //Guardar
      

      cy.contains("Por favor ingresa un nombre y apellido.").then($popup => {
        if ($popup.is(':visible')) {
            
            cy.log("Prueba exitosa, se valida codigo error")
        } 
        else{
         
          cy.log("Prueba Fallida, No se visualiza codigo")
            return
        }
    })

    //Codigo alternativo para validar la Web de paris.
      
  //    if (cy.contains("Por favor ingresa un nombre y apellido.").should("be.visible").click()) {
  //      cy.log("Prueba exitosa, se valida codigo error")
  //    } else {
  //      cy.log("Prueba Fallida, No se visualiza codigo")
  //    }
      
    })

    it('Caso de Prueba N° 3', () =>{
      cy.wait(1500)
      cy.xpath('//*[@id="navigation-new"]/div[3]/div/div/div[1]/div/button/div[1]').first().trigger('mouseover')
      cy.wait(tiempo)
      cy.xpath('//*[@id="navigation-new"]/div[3]/div/div/div[1]/div/button/div[1]').click({force:true}) 
      cy.wait(tiempo)

      cy.contains("Datos personales").should("be.visible").click()
      cy.wait(1500)
      cy.get('.tw-hidden > .tw-text-sm').click()
      cy.wait(tiempo)
      cy.get('.tw-flex > :nth-child(1) > .tw-relative > .tw-text-sm').clear()
      cy.get('.tw-flex > :nth-child(1) > .tw-relative > .tw-text-sm').type(" ")

      cy.get('#phone').clear()
      cy.get('#phone').type("77777777")

      cy.get('.tw-bg-cyan-primary').click() // Btn Guardar
      
      
      //cy.get('.tw-fixed > :nth-child(1) > .tw-flex > .tw-text-sm').then($popup => {
        cy.contains("Por favor ingresa un nombre y apellido.").then($popup => {
          if ($popup.is(':visible')) {
            cy.log("Prueba exitosa, se valida codigo error")
          } 
          else{
            cy.log("Error, no visualiza mensaje de error al ingresar datos no validos.")
              return
          }
      })


    
      
    })  

});

