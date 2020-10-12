"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.User = void 0;
var User = /** @class */ (function () {
    function User(_username, _password) {
        this._username = _username;
        this._password = _password;
    }
    Object.defineProperty(User.prototype, "userName", {
        get: function () {
            return this._username;
        },
        set: function (username) {
            this._username = username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (password) {
            this._password = password;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
var users = [];
var user1 = new User('yeisonq', '1q2w3e4r');
users.push(user1);
function getUsers() {
    return users;
}
exports.getUsers = getUsers;
