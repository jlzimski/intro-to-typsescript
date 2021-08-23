"use strict";
console.log("greetings");
// count is of "type" number
let count = 5;
console.log(count);
// Const's type is a literal
const fname = "Justin";
// this creates a type of "any"
// let testing;
let testing;
testing = 5;
let student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12
    // favColor: "Red"
};
function toString(student) {
    return JSON.stringify(student);
}
function add(x, y) {
    let result = x + y;
    return result;
}
console.log(add(5, testing));
// Tuple
function sendMessage() {
    return ["success", {
            fname: "Justin",
            lname: "Ahmann",
            grade: 12
        }];
}
const [statusResult, data] = sendMessage();
if (statusResult == "success")
    console.log(data);
