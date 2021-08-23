"use strict";
class Mail {
    constructor(data) {
        this.data = data;
    }
    send() {
        let returnValue = "success";
        return returnValue;
    }
    myMessage() {
        return this.data;
    }
}
class Email {
    constructor(data) {
        this.data = data;
    }
    send() {
        let returnValue = "success";
        return returnValue;
    }
    myMessage() {
        return this.data;
    }
}
const messages = [
    new Mail("Hello from snail mail"),
    new Email("Hello can you see me in the inbox")
];
messages.forEach(m => m.send());
let email = new Email("Hey!");
console.log(email.myMessage());
