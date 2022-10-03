import { mount } from 'cypress/react'
import {Create} from '../../components/Functional/ModalService'

import {Modal} from '../../components/Functional/Modal/Modal'

describe('Modal System', ()=>{

    it('starts with 0 modals', ()=>{
        var ModalService = Create()
        expect(ModalService.modals.length).to.equal(0)
    })

    it('increases to 1 modal on push', ()=>{
        var ModalService = Create()
        
        ModalService.push!({
            id: "test",
            create: function(){},
            show: function(){},
            hide: function(){},
            close: function(){}
        })

        expect(ModalService.modals.length).to.equal(1)
    })

    it('Executes modal actions', ()=>{
        var ModalService = Create()
        
        const happened: string = 'happened'

        var results: string[] = ['','','','']

        ModalService.push!({
            id: "test",
            create: function(){
                results[0] = happened
            },
            show: function(){
                results[1] = happened
            },
            hide: function(){                
                results[2] = happened
            },
            close: function(){      
                results[3] = happened
            }
        })

        var modal = ModalService.modals.pop()

        modal?.close()
        modal?.create()
        modal?.hide()
        modal?.show()

        expect(results.every(result => result===happened)).to.be.true
    })

})

describe('Modal System behaves while rendered', ()=>{

    it('Locates the element', ()=>{

        const modalId: string = 'modal'

        cy.mount(
            <Modal id={modalId} />
        )

        cy.get(`[data-cy-root] #${modalId}`)
        .then(bar =>{
            expect(bar.attr("id") === modalId).to.be.true
        })

    })

})