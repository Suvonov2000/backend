const EvenEmitter = require("events");

const eventEmitter = new EvenEmitter();

// const connectHandler = () => {
//   console.log("Successfully connected to database");
// };

// eventEmitter.on("connect", connectHandler);

// eventEmitter.emit("connect");
// eventEmitter.removeListener("connect", connectHandler);
// eventEmitter.emit("connect");

// eventEmitter.on("greet", (surname, name) => {
//   console.log(`hello ${surname} ${name}`);
// });
// eventEmitter.emit("greet", "suvonov", "umidjon");

eventEmitter.on("greet", (surname, name) => {
  console.log(`Hello ${name} ${surname}`);
});
eventEmitter.emit("greet", "suvonov", "umidjon");
