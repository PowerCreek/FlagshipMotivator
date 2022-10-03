type ModalValues = {
    modals: {
        id: string,
        create:Function,
        show: Function,
        hide: Function,
        close: Function
    }[];

    push?: Function;
    pop?: Function;
}

type ModalSignature = {
    id: string,
    create:Function,
    show: Function,
    hide: Function,
    close: Function
}

var MODAL_SERVICE: ModalValues;

export function RegisterOperator(){
    
}

export function Create() : ModalValues {   
    
    if(MODAL_SERVICE) return MODAL_SERVICE;

    var modalService: ModalValues = {
        modals: [],
        push: undefined 
    }

    modalService.push = (
        modal: ModalSignature)=>{

        modalService.modals.push({
            id: modal.id,
            create: modal.create,
            show: modal.show,
            hide: modal.hide,
            close: modal.close
        });
    }

    modalService.pop = (id: string)=>
    {
        var result = modalService.modals.slice(-1)[0]
        if(result.id !== id)
            return;

        modalService.modals.pop();
    }

    return MODAL_SERVICE = modalService
}