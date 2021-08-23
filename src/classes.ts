// interface
interface Point {
    calc(): Number
}

interface Point {
    something(): Number
}

// With interfaces you can  add them to class with the keyword implements
type message = "success" | "failure"
interface Send {
    data: string
    send(): message
}

// interface getMessage
interface GetMessage {
    myMessage(): string
}


class Mail implements Send{
    data
    constructor(data: string){
        this.data = data
    }
    send(): message {
        let returnValue: message = "success"
        return returnValue
    }
    myMessage(): string{
        return this.data
    }
}

class Email implements Send{
    data
    constructor(data: string){
        this.data = data
    }
    send(): message {
        let returnValue: message = "success"
        return returnValue
    }
    myMessage(): string {
        return this.data
    }
}

const messages = [
    new Mail("Hello from snail mail"), 
    new Email("Hello can you see me in the inbox")
]
messages.forEach(m => m.send())
let email = new Email("Hey!")
console.log(email.myMessage())






