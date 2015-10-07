$(document).ready(function() {
  $('.square').each(function(i, square) {
    // fix this to alternate colour on rows
    var bgColor = i % 2 === 0 ? '#ABA4AD' : '#8E878F';
    $(square).css({'background-color': bgColor});
  });

  var calculator = {
    add: function(a, b) { return (a + b) },
    subtract: function(a, b) { return (a - b) },
    divide: function(a, b) { return (a / b) },
    multiply: function(a, b) { return (a * b) },
    memory: []
  }

  var clearMemory = function() {
    calculator.memory = [];
    $('#screen')[0].innerText = '';
  }

  var addToMemory = function(buttonVal) {
    $('#screen')[0].innerText += buttonVal;
    calculator.memory.push(buttonVal);
  }

  var makeCalculation = function() {
    // Improve so it can perform operations on more than two numbers
    var numA = parseInt(calculator.memory[0]),
      operation = calculator.memory[1],
      numB = parseInt(calculator.memory[2]),
      result

    switch(operation) {
      case '+':
        result = calculator.add(numA, numB);
        break;
      case '-':
        result = calculator.subtract(numA, numB);
        break;
      case '/':
        result = calculator.divide(numA, numB);
        break;
      case '*':
        result = calculator.multiply(numA, numB);
        break;
    }

    $('#screen')[0].innerText = result;
    calculator.memory.push('=');
  }

  $('.btn').on('click', function() {
    var buttonVal = this.innerHTML;

    if (calculator.memory[calculator.memory.length -1] === '=') {
      clearMemory();
    }

    switch(buttonVal) {
      case 'CLEAR':
        return clearMemory();
        break;
      case '=':
        return makeCalculation();
        break;
      case '.':
        // account for decimal points
        break;
      default:
        addToMemory(buttonVal);
        break;
    }
  });
});