"use strict";
// interface merging
// interface Authenticatable {
//     role: string;
// }
class AuthenticatableUser {
    userName;
    email;
    password;
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    login() {
        // reach out to datbase, credentials etc
    }
    logout() {
        // clear and log on
    }
}
let user;
user = {
    email: 'text@example.com',
    password: 'abc1',
    login() {
        // reach out to datbase, credentials etc
    },
    logout() {
        // clear and log on
    },
    //role: 'hello'
};
