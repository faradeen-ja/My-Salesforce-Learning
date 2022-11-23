import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super()
        

        console.log('✅✅✅child constructor called')  // gets called first
    }


    connectedCallback(){
        console.log('➡️➡️➡️child connectedcallback called') //gets called second
    }

    renderedCallback(){
        // do not use
        //to change the state or update property of a comoponenet
        //dont update a wire adapter configs as it can result in an infinite loop.
        console.log('🚼🚼🚼child rendered callback called')
    }



    disconnectedCallback(){
        alert('⚠️DEMO - child got disconnected by call back')
        throw Error('🔥🔥🔥errrrr Child component got disconnected')

    }
}

