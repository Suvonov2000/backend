const EvenEmitter = require("events");

const eventEmitter = new EvenEmitter();

const connectHandler = () => {
  console.log("Successfully connected to the database");
};

eventEmitter.on("connect", connectHandler);

eventEmitter.emit("connect");
eventEmitter.removeListener("connect", connectHandler);
eventEmitter.emit("connect");

eventEmitter.on("greet", (surname, name) => {
  console.log(`hello ${surname} ${name}`);
});
eventEmitter.emit("greet", "suvonov", "umidjon");

eventEmitter.on("greet", (surname, name) => {
  console.log(`Hello ${name} ${surname}`);
});
eventEmitter.emit("greet", "suvonov", "umidjon");

console.log(eventEmitter.listenerCount("connect"));

// class mavzusi

const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drinks");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, topping) => {
  console.log(`Recieved order: ${size} ${topping} pizza`);
  drinkMachine.serverDrink(size);
});

pizzaShop.order("Large", "cheese");
pizzaShop.displayOrderNumber();
