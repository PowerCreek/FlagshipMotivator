import { any } from 'cypress/types/bluebird';
import { ReactElement, useState, useEffect } from 'react';
import {OPEN, CLOSE, RegisterOperator, Create, ModalSignature, ModalControls} from '../ModalService'
import styles from './Modal.module.css'

export function Modal({id}:{id?:string}){
    var service = Create()
    const [displayed, setDisplayed] = useState<{modal?:ModalSignature|null}>({modal:null});

    useEffect(() => {
        var modalOperator = {
            modalUpdated: function(message: string){
                switch(message){
                    case OPEN: 
                        setDisplayed({modal: service.modals[service.modals.length-1]})
                        break;
                    case CLOSE:
                        setDisplayed({modal: service.modals[service.modals.length-1]??null})                        
                        break;
                }
            }        
        }

        RegisterOperator(modalOperator)    
    })

    var shouldDisplay = displayed.modal !== null?null:styles.unshown

    return <div 
        id={id}
        className={[styles.modalContainer, shouldDisplay].flatMap(e=>e===null?[]:e).join(' ')}
    >
        {[
            <div key='control1' className={styles.controlGroup}>
                <div className={styles.title}>{
                    displayed.modal?.title
                }</div>
                {
                    !displayed.modal?.options?.includes(ModalControls.EXIT_CROSS)?
                    null:
                    <div 
                        controltype={ModalControls.EXIT_CROSS.toString()}
                        tabIndex={2} 
                        className={styles.closeCross}
                        onClick={(e)=>{
                            service.close!()
                        }}></div>
                }
            </div>,
            <div key='control3' className={styles.content}>
            {
                displayed.modal?.element
            }
            </div>,
            (
                !displayed.modal?.options?.includes(ModalControls.CLOSE_TAB)?
                null:
                <div key='control4' 
                    controltype={ModalControls.CLOSE_TAB.toString()}
                    tabIndex={2} 
                    className={styles.closeTab}
                    onClick={(e)=>{
                        service.close!()
                    }}></div>
            )
        ]}        
    </div>
}