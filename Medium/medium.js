//Write a function that would allow you to do this:
// prints "Each person gets 4.00 slices of pizza"
// prints "Each person gets 2.67 slices of pizza"

function cutPizzaSlices(x) {
  return function (y) {
    return `Each person gets ${x / y} slices of pizza`;
  };
}

var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));
console.log(sharePizza(3));
