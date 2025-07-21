require("./country_1");
require("./country_2");
require("./mathUtils");

(() => {
  const countryName = "Uzbekistan";
  console.log(countryName);
})();

(() => {
  const countryName = "Japan";
  console.log(countryName);
})();

const { add, subtract, divide, multiply } = require("./mathUtils");
console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(divide(25, 5));
console.log(multiply(2, 2));
