let names: Array<string>= ['max', 'anna'];   // this is a generic type.

type DataStore<T> = {
    [key: string] : T
};

let store: DataStore<string> = {};
store.name = 'Max';
store.isInstructor = true;