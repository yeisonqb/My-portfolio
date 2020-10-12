"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
function default_1() {
    if (localStorage.username) {
        document.getElementById("modalBtnCont").innerHTML = "<span>Hola, " + users_1.getUsers()[0].userName + "</span>";
        document.getElementById("btnAddPhoto").innerHTML = "<button class=\"btn btn-primary btn-block\">add Photo</button> \n                                                            <button id=\"btnSingOff\" class=\"btn btn-danger btn-block\">Sing off</button>";
        $('#btnSingOff').on('click', function (e) {
            e.preventDefault();
            localStorage.clear();
            window.location.reload();
        });
    }
}
exports.default = default_1;
