import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {

    //to reach to shadow dom of a page 
    //change styling

    isLoaded = false
    renderCallBack(){

        if(this.isLoaded) return

        const style = document.createElement('style')
        style.innerText = `c-chadow-dom-styling .slds-button{
            background: red;
            color: white;
        }`

        //append the style
        this.template.querySelector('lightning-button').appendChild(style)

        this.isLoaded = true
    }
}