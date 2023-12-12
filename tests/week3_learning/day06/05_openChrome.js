"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OpenChrome = /** @class */ (function () {
    function OpenChrome() {
        //browserName: string;
        this.browserName = 'chrome';
    }
    OpenChrome.prototype.startApp = function () {
        console.log("Launch the Chrome Browser.");
    };
    OpenChrome.prototype.loginCredentials = function (userName, password) {
        return userName + " " + password;
    };
    OpenChrome.prototype.getStatus = function () {
        return true;
    };
    return OpenChrome;
}());
var myChrome = new OpenChrome();
console.log(myChrome.browserName);
myChrome.startApp();
console.log(myChrome.loginCredentials('Demosalesmanager', 'crmsfa'));
console.log(myChrome.getStatus());
