/**
 * TypeScript Assignments

### Assignment 1: Automated Testing of a User Authentication System 
 
Objective:
Practice integrating classes and methods into a test script for a user authentication system.
 
Instructions:
1. Create a class as `UserAuthenticator` 
2. Create a methods like login(with 2 mandatory parameters and one optional parameter), logout, 
   and password reset.
3. Create instance of the class and call the methods
 * 
 * 
 */

   //Class definition
   class UserAuthenticator {

      userName: string = 'jonamarvel@testleaf.com';

      login(userName:string, password:string, name?:string, rememberMe?:boolean): void {

         if (name!=null) {
            console.log(`\nHello !! ${name}`);
         }
         if (rememberMe === true){
            console.log(`\nYour login informations are saved as your'Remember me' checkbox is ${rememberMe}\n`);
         }
         else if (rememberMe === false){
            console.log(`\nYour login informations are NOT saved as as your'Remember me' checkbox is ${rememberMe}\n`);
         }
         if (userName === "jonamarvel@testleaf.com" && password === "Testleaf123") {
            console.log("\nYour login is successfull, Your User name and Password details are below\n" + userName+"\n"+password);
         }

      }
      logout(userName: string): void{

         console.log(`\nYou (${userName}) logged out successfully!\n`)

      }
      resetPassword(email: string): void{
         console.log(`\nPassword reset email link is sent to ${email}, Please check your email to reset your password!\n`);
      }

   }

   //To create instance of the classs
   const myUserAuthentication = new UserAuthenticator();
  
   //To call the method with all parameters including optional parameters
   myUserAuthentication.login(myUserAuthentication.userName, "Testleaf123","Jona Marvel",true);

   //To call login method only with required parameters
   //console.log(myUserAuthentication.login("jonamarvel@testleaf.com", "Testleaf123"));

   //To call logout method
   myUserAuthentication.logout(myUserAuthentication.userName);

   //To call resetPassword method
   myUserAuthentication.resetPassword(myUserAuthentication.userName);
