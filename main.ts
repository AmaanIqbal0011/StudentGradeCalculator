#! /usr/bin/env node

import inquirer from "inquirer";

let studentMarks: number | any = await inquirer.prompt({
  name: "marks",
  type: "number",
  message: "Enter Your Marks To obtain Grade",
});
let grade;
if (studentMarks.marks >= 90 && studentMarks.marks <= 100) {
  grade = "A";
} else if (studentMarks.marks >= 70 && studentMarks.marks <= 89) {
  grade = "B";
} else if (studentMarks.marks >= 60 && studentMarks.marks <= 69) {
  grade = "C";
} else if (studentMarks.marks >= 50 && studentMarks.marks <= 59) {
  grade = "D";
}else{
    grade = "F"
};

console.log(`your marks is ${studentMarks.marks} and Your Grade is ${grade}`)
