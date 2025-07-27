const EvenEmitter = require("events");

const eventEmitter = new EvenEmitter();

const connectHandler = () => {
  console.log("Successfully connected to database");
};

eventEmitter.on("connect", connectHandler);

eventEmitter.emit("connect");
eventEmitter.removeListener("connect", connectHandler);
eventEmitter.emit("connect");
