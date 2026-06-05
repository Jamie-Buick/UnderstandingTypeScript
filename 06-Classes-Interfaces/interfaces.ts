interface Authenticatable {

    email: string;
    password: string;

    login(): void;
    logout(): void;
}

// interface merging
// interface Authenticatable {

//     role: string;
// }


class AuthenticatableUser implements Authenticatable {
    constructor(public userName: string, public email: string, public password: string) {}   

    login(){
        // reach out to datbase, credentials etc
    }

    logout(){
        // clear and log on
    }
}




let user: Authenticatable;

user = {
    email: 'text@example.com',
    password: 'abc1',

    login(){
        // reach out to datbase, credentials etc
    },

    logout(){
        // clear and log on
    },

    //role: 'hello'
}