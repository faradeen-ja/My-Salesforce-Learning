import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {


    selected={}  // for storing answers
    correctAnswers = 0 // to show the number of correct answers   = 0
    isSubmitted = false// use to show the result

    myQuestions =[
        {
            id: 'Q1',
            question: "Which one of the following is not a template loop?",
            answers:{
                a: 'for:each',
                b: 'iterator',
                c: 'map loop'
            },
            correctAnswers:'c'
        },
        {
            id: 'Q2',
            question: "Which one of the file is invalid in LWC Component Folder?",
            answers:{
                a: 'svg',
                b: 'apex',
                c: 'js'
            },
            correctAnswers:'b'
        },
        {
            id: 'Q3',
            question: "Which one of the following is not a directive?",
            answers:{
                a: 'for:each',
                b: 'if:true',
                c: '@track'
            },
            correctAnswers:'c'
        }
    ]


//used for disabling submit button
    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }


// for appplying dynamic styling to our result
    get isScored(){
        `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers? 
        'slds-text-color_success' : 'slds-text-color_error'}`

    }




    //handler for inputs 
    changeHandler(event){
        console.log(event.target.name)
        console.log(event.target.value)
        const {name, value} = event.target //this is destructuring makes the below lines one line
        //const name = event.target.name
        //const value = event.target.value
        this.selected={...this.selected, [name]:value} // [name]:value is dynamic id selecting ||  [Q1]:"a ,b or c" this is hard codeded and will not automatically select other Ids //spread opterator copies of array or object
    }

// submit handler
    submitHandler(event){
        event.preventDefault()
       let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswers)
       //this.selected ={'Q1': 'a', 'Q2': 'c', 'Q3': 'b'}  if the use has selected we used filter to make it dynamic 
       this.correctAnswers = correct.length  
       this.isSubmitted = true
       console.log('this.correctanswers', this.correctAnswers)
      

    }


// reset app, form, 
    resetHandler(){
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted = false


    }




}