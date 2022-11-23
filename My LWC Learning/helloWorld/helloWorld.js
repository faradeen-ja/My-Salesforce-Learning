import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    // data binding demo from js to html
    fullname='zero to hero'
    title = 'aura'

    //now we create a method for onkeyup
    changeHandler(event){
        this.title = event.target.value

    }


    // @track
    @track address={
        city: 'Austin',
        Zipcode: 77008,
        country: 'USA'
    }

    trackHandler(event){
        // we can avoid using @track by doing this ...spread operator 
        //this.address = {...this.address, 'city':event.target.value} // use this without track 
        this.address.city = event.target.value
        
    }




   // getters

   users =['jojo', 'sexynana', 'rigi']
   num1 = 10
   num2 = 11

   get users(){
    return this.users
   }


   get multiplication(){
    return this.num1 * this.num2
   }





    //next > methods  > methods are funcitons in LWC
    
    //method
    getName(){
           //perform my logic
    }






     // each component is a class HelloWorld here is a class we can give it properties
     /* 
     name
     age=30
     fullName = 'Salesforce USA'
     showData = false
     details = {
        name: 'dummy',
        place:'USA'
     }
     userList = ['A', 'B', 'C'] */



     // these are local properties and cant be accessed outside of this class
     // cant access these variables from outside




}