import UserPreferencesReminderSoundOff from '@salesforce/schema/User.UserPreferencesReminderSoundOff';
import { LightningElement } from 'lwc';

export default class ConditionalRendringUsingDirectives extends LightningElement {

    isVisible = false // 🔁on load
    name // we will leave undeclared 
    searchTags 

    handleClick(){
        this.isVisible = true/// ⚡conditional load 
      
    }


    changeHandler(e){
        this.searchTags = e.target.value
        
    }


 /*    get inputHello(){

        return this.name === 'hello'

    }
 */

    get tags(){
        return this.searchTags === 'skills'
    }






    //falsy values
   // x = 0, false, undefined, null   anytime you use falsy values  if these exist in your html markup properties it always be false evev if you set markup to true if:true{expression} = false
    

} // main class closing bracket





