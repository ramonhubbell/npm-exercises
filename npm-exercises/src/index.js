const $ = require('jquery');

const sayHello = (input) =>  console.log('Hello')

sayHello();

$(document).ready(){
    $('body').html(sayHello());
}

import sayHi from './say-hello';
