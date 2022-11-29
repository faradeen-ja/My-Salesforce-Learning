import { LightningElement } from 'lwc';

export default class HelloQuerySelectoreDemo extends LightningElement {

    // 🤹🏽‍♀️querySelector ALL
    // property of user names
    userNames =['jojo', 'mikiy', 'nana', 'john', 'user']






    fetchDetailHandle(){
        //➡️for button selector H1 tag
        const element = this.template.querySelector('h1')
        element.style.border = '1px solid red'
        console.log(element.innerText)


        //🧟‍♂️for userNames
        const userElements = this.template.querySelectorAll('.name')
        //for userNames
        Array.from(userElements).forEach(item => { // we use Array.from because userElements is not an array it's a node of elements
            console.log(item.innerText)
            //adding style attributes dynamically  
            item.setAttribute('title', item.innerText)
        })



        //lwc:dom="manual" demo
        const childEl = this.template.querySelector('.child')
        childEl.innerHTML = '<p>I am child element was added to html by javaScript</p>' // adds p tag to html DOM  

    }
}
