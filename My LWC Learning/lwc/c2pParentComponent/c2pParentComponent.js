import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {

    showModal = false                 //❌by default the modal will not be visible for now
    msg


    modalHandler(){
        this.showModal = true             // by clicking on the btn it will go visible   parent to child action
    }

    closeHandler(event){       
        this.msg = event.detial              // whenever the ok button gets called it will call the html and html will call the onclose event and onclose will call the close handler and the close handler will receive the event and it will start show modal false 
        this.showModal = false               // by clicking on the ok it will call the parent   child to parent action

                                                
    }

}


