const EventEmitter = require("events");
const myEventEmitter = new EventEmitter();

myEventEmitter.on("event1", (name) => {
  console.log(`the first ON is executed: ${name}`);
});
myEventEmitter.on("event2", (name) => {
  console.log(`the second ON is executed: ${name}`);
});
myEventEmitter.emit("event1", "Claire");
myEventEmitter.emit("event2", "Mary");
