"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var leggedin_1 = __importDefault(require("./leggedin"));
function default_1(referentUserDB, formInfo) {
    if (referentUserDB.userName === formInfo.username) {
        if (referentUserDB.password === formInfo.password) {
            localStorage.setItem('username', formInfo.username);
            leggedin_1.default();
        }
        else {
            return;
        }
    }
    else {
        return;
    }
}
exports.default = default_1;
