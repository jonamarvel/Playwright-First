var LoginPage = /** @class */ (function () {
    function LoginPage(bName, bVersion, URL) {
        this.browserName = bName;
        this.browserVersion = bVersion;
        this.url = URL;
        console.log("The Browser Details are ".concat(bName, ", ").concat(bVersion, ", ").concat(URL));
    }
    LoginPage.prototype.signUp = function (userName, password) {
        return userName + " " + password;
    };
    return LoginPage;
}());
var myBrowser = new LoginPage('chrome', 117, "http://leaftaps.com/opentaps/control/main");
var cred = myBrowser.signUp("Demosalesmanager", "crmsfa");
console.log("The Credentials of Leaftaps page".concat(cred));
