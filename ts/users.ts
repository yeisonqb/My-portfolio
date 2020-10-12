export class User {
    constructor(private _username:string, private _password:string ){

    }

    get userName ():string{
        return this._username;
    }

    set userName (username){
        this._username = username;
    }

    get password ():string{
        return this._password;
    }

    set password (password){
        this._password = password;
    }
}

let users:User[] = [];

let user1 = new User('yeisonq', '1q2w3e4r');
users.push(user1);


export function getUsers(){
    return users;
}