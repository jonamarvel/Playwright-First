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

import { UIComponent } from "./02_interfaceForuiComponent";

class Button implements UIComponent{
   render(): void{
      console.log("Button is rendered");
   }
   handleEvent(): void {
      console.log("Button event is handled");
   }
}

class TextField implements UIComponent{
   render(): void{
      console.log("TextField is rendered");
   }
   handleEvent(): void {
      console.log("TextField event is handled");
   }
}

class Checkbox implements UIComponent{
   render(): void{
      console.log("Checkbox is rendered");
   }
   handleEvent(): void {
      console.log("Checkbox event is handled");
   }
}

const myButton = new Button();
myButton.render();
myButton.handleEvent();

const myTextField = new TextField();
myTextField.render();
myTextField.handleEvent();

const myCheckbox = new Checkbox();
myCheckbox.render();
myCheckbox.handleEvent();
