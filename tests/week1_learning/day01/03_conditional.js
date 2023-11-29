

/*
Use new Javascript File Name: 02_Conditional.js
 
    Objective: Learn if - else and switch - case
    Create 2 functions : launchBrowser, runTests
    where,
    a) launchBrowser need to take input as browserName (string) and do not return any
        - use if, else (chrome or otherwise)
        - just print
    b) runTests need to take input as testType (string) and do not return any
        - use switch case (smoke, sanity, regression, default (smoke))
        - just do print
 
    Call that function from the javascript

    */
   
let browserName="chrome"
function launchBrowser(browserName) {
    if (browserName=="chrome") {
        console.log("Chrome Browser")
    }
    else
    {
        console.log("Not a Chrome Browser")
    }
    }
let testType = "Sanity"
function runTests(testType) {
    switch (testType) {
        case "Sanity":
            console.log("Sanity Testing Type")
                break;
        case "Regression":
            console.log("Regression Testing Type")
                break;
        
        default:
            console.log("Smoke Testing Type")
            break;
        }
        }

        launchBrowser(browserName)
        runTests(testType)
