/* 
What is JSON? 
    Object--Array--Number--String

"Literal Values"
    false--true--null
*/
// Modify the 3 ways JSON values to parse json and fail otherwise
// Use the isJSON function to test
function isJSON(j: JSONValue){}
type Primative = string | number | boolean | null

type JSONObject = ([k: string]: JSONValue)
type JSONArray = JSONValue[]
type JSONValue = Primative | JSONObject | JSONArray

let testing1: JSONValue = { fname: "Justin", data: [1, 2, 3]}
let testing2: JSONValue = "Test Sting"
let testing3: JSONValue = [1, 2, "Hello", { fname: "Justin"}]

isJSON(testing1)
isJSON(testing2)
isJSON(testing3)

let test2: JSONValue = { fname: "Justin", data: [1, 2, 3]}
let test3: JSONValue = { fname: "Justin", data: [1, 2, 3]}

//  expect-error
isJSON(class Test{})

//  expect-error
isJSON(isJSON)


