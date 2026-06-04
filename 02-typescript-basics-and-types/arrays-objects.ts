let hobbies = ['sports', 'cooking'];  // we can add the : string[] but not nessesary

//hobbies.push(10);

//let users: (string | Number)[];
let users: Array<string | Number>; // generic type 

users = [1,2];
users = ['hello' , 1];

let possibleResults: [number, number]; // [1 / -1] // tuples

possibleResults = [1, - 1];
//possibleResults = [5 , 10, 12];

// object 

let user = {
    name: 'Jamie',
    age: 27
};


let val: {} = 'some text';
const someObj = {};


let data: Record<string, number | string>; // Record used for objects

data = {
    entry1: 1,
    entry2: 'hello'
};