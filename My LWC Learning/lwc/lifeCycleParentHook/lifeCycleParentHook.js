import { LightningElement } from 'lwc';

export default class LifeCycleParentHook extends LightningElement {

    isChildVisible = false   //unmounting phase property
    constructor(){
        super()
        

        console.log('1️⃣📣📣📣parent constructor called')  // gets called first
    }


    connectedCallback(){
        console.log('2️⃣📣📣📣parent connectedcallback called') //gets called second
    }

    renderedCallback(){
        // do not use
        //to change the state or update property of a comoponenet
        //dont update a wire adapter configs as it can result in an infinite loop.
        console.log('3️⃣🔥🔥🔥parent rendered callback called')
    }

    //name
    ////changeHandler(event){
       // this.name = event.target.value


    //}

    handleClick(){  //unmounting phase ---- handle clicks for parent child components hooks removal dmeo
        this.isChildVisible = !this.isChildVisible

    }

    //disconnection err showing for child component when removed
    errorCallback(err, stack){
        console.log(err.message)
        console.log(stack)

    }

  
}



//unmount
//error
//Render....