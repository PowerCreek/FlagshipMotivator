//import { mount } from 'cypress/react'
import { mount } from 'cypress/react'
import {TopBar} from '../../components/Admin/Topbar'

describe('Proper implementation', () => {

  it('Locates the element', () => {

    cy.mount(
      <TopBar/>
    )
    
    cy.get("[data-cy-root]").children().first()
    .then(bar =>{
        expect(bar.attr("id") === "topbar").to.be.true
    })
        
  })

  it('Locates topbar items', () => {

    var topbarId = 'topbar';
    var topbarItemId = 'topbar-item'

    cy.mount(
      <TopBar/>
    )
    
    cy.get(`#${topbarId}`)
    .children().each(e=>{
        expect(`${e.attr("id")}`.includes(topbarItemId)).to.be.true
    })
        
  })

})