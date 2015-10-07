$(document).ready(function() {
  var calculator = {
    add: function(a, b) { console.log(a + b) },
    subtract: function(a, b) {console.log(a - b) },
    divide: function(a, b) { console.log(a / b) },
    multiply: function(a, b) { console.log(a * b) },
    memory: []
  }

  var clearMemory = function() {
    calculator.memory = [];
    $('#screen')[0].innerText = '';
  }

  var makeCalculation = function() {
    // take the array, look for operands and then do the calc
    console.log(calculator.memory);
    var numA = parseInt(calculator.memory[0]),
      operation = calculator.memory[1],
      numB = parseInt(calculator.memory[2]);

    switch(operation) {
      case '+':
        return calculator.add(numA, numB);
        break;
      case '-':
        return calculator.subtract(numA, numB);
        break;
      case '/':
        return calculator.divide(numA, numB);
        break;
      case '*':
        return calculator.multiply(numA, numB);
        break;
    }
  }

  $('.btn').on('click', function() {
    var buttonVal = this.innerHTML;
    console.log(buttonVal);

    if (buttonVal === 'CLEAR') {
      return clearMemory();
    }

    if (buttonVal === '=') {
      return makeCalculation();
    }

    $('#screen')[0].innerText += buttonVal;
    calculator.memory.push(buttonVal);
  });

});