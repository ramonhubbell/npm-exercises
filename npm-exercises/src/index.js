const $ = require('jquery');

import sayHello from './say-hello';

// const sayHello = (input) =>  console.log('Hello')
//
// sayHello();

// const person = { firstname: 'Ramon' };
// const { firstname } = person;
// const sayHello = (person) => `Hello ${person.firstname}.`;
//
// console.log(sayHello(person));



$(document).ready (() =>{
    $('body').html(sayHello(person));


});



