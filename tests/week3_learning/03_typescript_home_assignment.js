/*
 * Typescript
 * Create variables with different data types and print them in console
    1) browserVersion - 117 (immutable)
    2) browserNames- declare a type datatype with variables bName as Edge and updated version as 115
    3) isHeadless - true (use implicit type reference)
    4) releaseYear - 1998 (use explicit type reference)
    5) browserLogo - use 'any' data type and use two values with different data types
 
*/
console.log("\nTypescript variables with different data types");
console.log("------------------------------------------------");
// Using let variable => browserVersion - 117 (immutable)
var browserVersion = 117;
console.log("\nBrowser Version with immutable data type 'const' is ".concat(browserVersion));
var browserDetails = { bName: 'Edge', uVersion: 115 };
console.log("\nCustom Data Type -> Browser Details below : \n Browser Name: ".concat(browserDetails.bName, " \n Browser Updated Version: ").concat(browserDetails.uVersion));
//isHeadless - true (use implicit type reference)
var isHeadless = true;
console.log("\nExample for implicit type reference(let isHeadless = true), isHeadless is ".concat(isHeadless));
//releaseYear - 1998 (use explicit type reference)
var releaseYear = 1998;
console.log("\nExample for explicit type reference(let releaseYear: number = 1998), releaseYear is ".concat(releaseYear));
//browserLogo - use 'any' data type and use two values with different data types
var browserlogo;
browserlogo = 'logo1';
browserlogo = false;
console.log("\nExample for assigning with any data type with two values\n browserlogo = 'logo1';\n browserlogo = false; and \n latest value of browser logo is ".concat(browserlogo, "\n"));
