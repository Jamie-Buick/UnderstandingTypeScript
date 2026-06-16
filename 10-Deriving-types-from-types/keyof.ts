type User = {name: string; age: number};
type Userkeys = keyof User;


let validKey : Userkeys;

validKey = 'name';
validKey = 'age';


function getProp<T extends object, U extends keyof T> (obj: T, key: U) {
    const val = obj[key];

    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value');
    }

    return val;
}



const user = {name: 'max', age:35};

const val = getProp(user, 'age');