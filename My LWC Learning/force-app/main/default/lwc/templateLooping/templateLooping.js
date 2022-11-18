import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {
//looping temps only works with arrays in LWC
carList = ['Ford', 'Audi', 'Toyota', 'Ferrari']



//array of object
ceoList = [
    {
        id:1,
        company: 'CodeOrbits.io',
        name: 'F Jami'
    },

    {
        id:2,
        company: 'Youtube',
        name: 'Ahmad Jawed'

    },

    {
        id:3,
        company: 'Uber',
        name: 'Dara'
    },

    {
        id: 4,
        company: 'Apple',
        name: 'Tim Cook'
    }
]


}



