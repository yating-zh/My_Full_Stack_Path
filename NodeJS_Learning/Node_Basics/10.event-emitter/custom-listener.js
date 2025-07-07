const EventEmitter = require("events");
class CustomEmitter extends EventEmitter {
  //create constructor
  constructor() {
    super();
    this.greeting = "Hello";
  }
  greet(name) {
    this.emit("greeting", `${this.greeting}, ${name}`);
  }
  thanks(name) {
    this.emit("thanks", `Thanks ${name}`);
  }
  bye(name) {
    this.emit("bye", `See you ${name}`);
  }
}

const myCustomEmitter = new CustomEmitter();

//listener of multiple events
myCustomEmitter.on("greeting", (msg) => {
  console.log(`Greeting Event`, msg);
});
myCustomEmitter.on("thanks", (msg) => {
  console.log(`Thanks Event`, msg);
});
myCustomEmitter.on("bye", (msg) => {
  console.log(`Bye Event`, msg);
});

myCustomEmitter.greet("Mary");
myCustomEmitter.thanks("Mary");
myCustomEmitter.bye("Mary");
