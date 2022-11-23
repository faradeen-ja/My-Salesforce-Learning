import { LightningElement } from 'lwc';

export default class DyanamicCss extends LightningElement {

    percent = 10
    maxPercent = 100
    changeHandler(event){
        this.percent = event.target.value



    }

    get percentage (){
      
        return `width:${this.percent}%`  // dynamic percentage change 
    }
}   