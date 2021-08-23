// type -- this allows us to add to the type system
type Year = string | number

enum Color {
    "red",
    "blue",
    "yellow"
}

console.log(Color.red)


type Car = {
    year: Year,
    color: Color

}

type addInput = number | string
function addTwoThings(x: any, y: any): string | number {
    return x + y
}
let z = addTwoThings(2, 5)
console.log(z)
// Guard .. Type Guards--TypeScript Narrowing
if (typeof z == "string")(
    z.toUpperCase()
)

// [1, 2, "string"] // Array<number> or number[] // Array<any> or any[]
let myObj: any[] | object
myObj = [1, 2, 3]
if (myObj instanceof Array){
    console.log(myObj)
} else {
    let values = Object.values(myObj)
    console.log(values)
}

