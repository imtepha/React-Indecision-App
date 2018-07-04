var module = {
  x: 42,
  getX: function () {
    return this.x;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = module.getX.bind(module);
console.log(boundGetX());