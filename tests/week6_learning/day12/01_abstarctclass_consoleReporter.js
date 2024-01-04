"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _01_abstractclass_testReporter_1 = require("./01_abstractclass_testReporter");
//Implementation Class
var consoleReporter = /** @class */ (function (_super) {
    __extends(consoleReporter, _super);
    function consoleReporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    consoleReporter.prototype.start = function () {
        console.log("Test reporting is started.");
    };
    consoleReporter.prototype.reportTest = function (testName, result) {
        console.log("Test : ".concat(testName, ", Result :").concat(result));
    };
    consoleReporter.prototype.end = function () {
        console.log("Test reporting is ended.");
    };
    return consoleReporter;
}(_01_abstractclass_testReporter_1.TestReporter));
var reporter = new consoleReporter();
reporter.start();
reporter.reportTest("Loin Testcase", "Passed");
reporter.reportTest("Signup Testcase", "Failed");
reporter.end();
