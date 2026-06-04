function add(a: number, b: number) : number{
    return a + b;
}

function log(message: string) {
    console.log(message);
}

function logAndThrow(errorMessage : string) : never { 
    console.log(errorMessage);
    throw new Error(errorMessage);
}

function performJob(cb: (m:  string) => void  ){

    cb('job done');
}


performJob(log);