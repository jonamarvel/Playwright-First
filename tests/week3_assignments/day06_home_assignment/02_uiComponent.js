"use strict";
/**
 * TypeScript Assignments
 
### Assignment 2: UI Component Library
 
Objective:
Practice creating interfaces and implementing them in classes for a UI component library.
 
Instructions:
1. Create a TypeScript interface named `UIComponent` with methods `render()` and `handleEvent()`.
2. Create classes `Button`, `TextField`, and `Checkbox` that implement the `UIComponent` interface.
3. Implement the methods in each class to simulate rendering and handling events for UI components.
4. Create instances of all UI components  and call all the methods
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.render = function () {
        console.log("Button is rendered");
    };
    Button.prototype.handleEvent = function () {
        console.log("Button event is handled");
    };
    return Button;
}());
var TextField = /** @class */ (function () {
    function TextField() {
    }
    TextField.prototype.render = function () {
        console.log("TextField is rendered");
    };
    TextField.prototype.handleEvent = function () {
        console.log("TextField event is handled");
    };
    return TextField;
}());
var Checkbox = /** @class */ (function () {
    function Checkbox() {
    }
    Checkbox.prototype.render = function () {
        console.log("Checkbox is rendered");
    };
    Checkbox.prototype.handleEvent = function () {
        console.log("Checkbox event is handled");
    };
    return Checkbox;
}());
var myButton = new Button();
myButton.render();
myButton.handleEvent();
var myTextField = new TextField();
myTextField.render();
myTextField.handleEvent();
var myCheckbox = new Checkbox();
myCheckbox.render();
myCheckbox.handleEvent();
