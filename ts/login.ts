import { User } from "./users";
import loggedIn from "./leggedin";

export default function(referentUserDB:User, formInfo:{username:string, password:string}){
    
    if(referentUserDB.userName === formInfo.username){
        if(referentUserDB.password === formInfo.password){

            localStorage.setItem('username', formInfo.username);

            loggedIn();

        }else{
            return;
        }
    }else{
        return;
    }

}