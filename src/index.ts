console.log("greetings");

// count is of "type" number
let count = 5

console.log(count);

// Const's type is a literal
const fname = "Justin"

// this creates a type of "any"
// let testing;

let testing: number;

testing = 5
// testing = "Justin"

type Student = { // builds structure of object
    fname: string
    lname: string
    grade: number
}

let student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12
    // favColor: "Red"
}

function toString(student: Student){
    return JSON.stringify(student)
}


function add(x: number, y: number): number{
    let result = x + y
    return result
}
console.log(add(5, testing))


// Union
type Status = "success" | "failure"
type ServerResponse = Student | Error
// Tuple
function sendMessage(): [status: Status, message: ServerResponse]{
    return ["success", {
        fname: "Justin",
        lname: "Ahmann",
        grade: 12
    }]
}

const [statusResult, data] = sendMessage()
if (statusResult == "success")
    console.log(data)
