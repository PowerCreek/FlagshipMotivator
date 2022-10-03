//import { mount } from 'cypress/react'
import { mount } from 'cypress/react'
import {GroupContainer} from '../../components/Admin/GroupContainer'

describe('Proper implementation', () => {
  it('Contains correct items when rendered', () => {

    var input = ["a","b","c"]

    cy.mount(
      <GroupContainer 
        Entries={input.map((e: string)=>({Id: e, Node: <div>{e}</div>}))}
      />
    )
    
    var results:string[] = []
    
    var sampleInstance = cy.get("[data-cy-root]").first()
    sampleInstance.children().first().children().each(async (each:any)=>{ 

      results.push((await (each)).attr("id"))

    }).then(()=>{
      
      expect(results.every((s:string) => input.includes(s))).to.be.true

    })
  })

  it('Fails with incorrect items when rendered (Valid Testing)', () => {

    var input = ["a","b","c"]

    cy.mount(
      <GroupContainer 
        Entries={[...input, "d"].map((e: string)=>({Id: e, Node: <div>{e}</div>}))}
      />
    )
    
    var results:string[] = []
    
    var sampleInstance = cy.get("[data-cy-root]").first()
    sampleInstance.children().first().children().each(async (each:any)=>{ 

      results.push((await (each)).attr("id"))
 
    }).then(()=>{
      
      expect(results.every((s:string) => input.includes(s))).to.not.be.true

    })

  })
})