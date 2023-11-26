/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/


function calculateGrade(studentScore) {
    let studentGrade = ""
    switch (true) {
        case (studentScore >= 0 && studentScore < 35):
            studentGrade = "Grade D";
            break;
        case (studentScore >= 35 && studentScore < 50):
            studentGrade = "Grade c";
            break;
        case (studentScore >= 50 && studentScore < 75):
            studentGrade = "Grade B";
            break;    
        case (studentScore >= 75 && studentScore <= 100):
            studentGrade = "Grade A";
            break;  
        default:
            studentGrade = "This is not a valid score for student. The student's score should be from 0 to 100";
            break;
    }
    return studentGrade
}
const prompt = require('prompt-sync')();
let studentScore=prompt("Please enter student's score : ")
console.log("Student's score is "+studentScore)
console.log("Student's Grade is "+ calculateGrade(studentScore))