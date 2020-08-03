const $ = require('jquery');

const sayHello = (input) =>  console.log('Hello')

sayHello();

$(document).ready(() => {
    $('body').html(sayHello());
});