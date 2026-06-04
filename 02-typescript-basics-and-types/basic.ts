//console.log('hello');

let userName : string;   // implicit type
let userAge = 38;        // inferred type

//..

userName = 'Max';
//userAge = '38'; // wont work as its a number



function add(a: number, b: number) {
    return a+b;
}