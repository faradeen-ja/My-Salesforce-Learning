import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    closeHandler(){   
        const myEvent = new CustomEvent('close', {
            detail: 'detials added to modal',
            bubbles: true
            

        })                                                         //✅ my custom event is created now.... what??????
        this.dispatchEvent(myEvent)                                 //➡️ now i want to dispatch the event to execute it


        //now that we have created a custom event who will 🔊listen to this event??
        //we will go to c2pParentComponent and inject it into child component tags

        //<template if:true={showModal}>
        //<c-c2p-modal-component        <-----------------here
        //onclose={closeHandler}       <--------here  
        //></c-c2p-modal-component>

    //</template>


    }


    footerEventHandle(){
        console.log('footer event called')    // event bubbling  child looks for above element > parent >> and more
    }
}
