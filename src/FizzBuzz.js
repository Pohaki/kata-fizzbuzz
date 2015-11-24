function fizzBuzz(i) {
  var Fizz = "Fizz";
  var Buzz = "Buzz";
  if (i % 15 === 0){
    return Fizz + Buzz;
  }
  else if (i % 5 === 0){
    return Buzz;
  }
  else if (i % 3 === 0){
    return Fizz;
  }
  else {
    return i;
  }
}

module.exports = fizzBuzz;
