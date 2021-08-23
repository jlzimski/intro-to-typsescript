"use strict";
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {}));
console.log(Color.red);
function addTwoThings(x, y) {
    return x + y;
}
let z = addTwoThings(2, 5);
console.log(z);
// Guard .. Type Guards--TypeScript Narrowing
if (typeof z == "string")
    (z.toUpperCase());
// [1, 2, "string"] // Array<number> or number[] // Array<any> or any[]
let myObj;
myObj = [1, 2, 3];
if (myObj instanceof Array) {
    console.log(myObj);
}
else {
    let values = Object.values(myObj);
    console.log(values);
}
