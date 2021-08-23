"use strict";
/*
What is JSON?
    Object--Array--Number--String

"Literal Values"
    false--true--null
*/
// Modify the 3 ways JSON values to parse json and fail otherwise
// Use the isJSON function to test
function isJSON(j) { }
JSONValue;
let testing1 = { fname: "Justin", data: [1, 2, 3] };
let testing2 = "Test Sting";
let testing3 = [1, 2, "Hello", { fname: "Justin" }];
isJSON(testing1);
isJSON(testing2);
isJSON(testing3);
let test2 = { fname: "Justin", data: [1, 2, 3] };
let test3 = { fname: "Justin", data: [1, 2, 3] };
//  expect-error
isJSON(class Test {
}, t);
//  expect-error
isJSON(isJSON);
