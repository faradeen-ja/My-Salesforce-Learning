import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {

    val = 20


    changeHandler(event){
        this.val = event.target.value

    }


// to expose to parent  --> api to make js of the parent 
//this method should publically be exposed to be accessed from parent component using @api
    @api resetSlider(){
        this.val = 50
    }


}