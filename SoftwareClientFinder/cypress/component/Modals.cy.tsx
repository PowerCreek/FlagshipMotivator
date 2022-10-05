import { mount } from 'cypress/react'
import {Create, ModalControls} from '../../components/Functional/ModalService'

import {Modal} from '../../components/Functional/Modal/Modal'
import { delay } from 'cypress/types/lodash'
import { promises } from 'stream'

describe('Modal System', ()=>{

    it('starts with 0 modals', ()=>{

        cy.mount(<Modal id={"modal-entry"}/>)
        .then(()=>{

            var ModalService = Create()
            expect(ModalService.modals.length).to.equal(0)

        })

    })

    it('increases to 1 modal on push', ()=>{
        cy.mount(<Modal id={"modal-entry"}/>)
        .then(()=>{
            var ModalService = Create()
            
            var resultModal = ModalService.open!({
                id: "test",
                open: function(){},
                close: function(){}
            })

            expect(ModalService.modals.length).to.equal(1)

            ModalService.close!()
        })
    })

    it('Executes modal actions', ()=>{
        cy.mount(<Modal id={"modal-entry"}/>)
        .then(()=>{
            var ModalService = Create()
            
            const happened: string = 'happened'

            var results: string[] = ['']

            const modalId = "test-id"

            var resultModal = ModalService.open!({
                id: modalId,
                element: (<div>test</div>)
            })

            var fun = ModalService.close

            ModalService.close = ()=>{                
                fun!()
                results[0] = happened
            }

            ModalService.close()

            expect(results.every(result => result===happened)).to.be.true
        })
    })
})

describe('Modal System behaves while rendered', ()=>{

    it('Locates the element', ()=>{
        var ModalService = Create()

        const modalId: string = 'modal'

        cy.mount(

            <Modal id={modalId} />

        ).then({timeout: 8000},async ()=>{

            cy.get(`[data-cy-root] #${modalId}`)
            .then(bar =>{
                expect(bar.attr("id") === modalId).to.be.true
            })

            var resultModal;
            resultModal =  ModalService.open!({
                id: "test1",
                title: 'sample title',
                options: [ModalControls.CLOSE_TAB],
                element: <div>content 1</div>,
                close: function(){
                    console.log("closing modal1")
                }
            })

            resultModal =  ModalService.open!({
                id: "test2",
                title: 'sample title 2',
                options: [ModalControls.EXIT_CROSS],
                element: <div>content 2</div>,
                close: function(){
                    console.log("closing modal1")
                }
            })
            
            cy.wait(1000);

            var elem = cy.get(`[controltype=${ModalControls.EXIT_CROSS}]`)
            cy.wait(1000);
            elem.click()

            elem = cy.get(`[controltype=${ModalControls.CLOSE_TAB}]`)
            cy.wait(1000);
            elem.click()
        })
    })

})