import {getUsers} from "./users";
import Login from "./login";
import loggedIn from "./leggedin";
import $ from "jquery";


//check if logged in
loggedIn();




document.getElementById("loginButton")!.addEventListener('click', function(e){

    e.preventDefault();

    let username:string = (<HTMLInputElement>document.getElementById("username")).value; 
    let password:string = (<HTMLInputElement>document.getElementById("password")).value;

    Login(getUsers()[0], {username, password});


})



