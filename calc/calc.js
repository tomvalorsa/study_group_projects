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
    addToMemory: function(buttonVal) {
      calculator.memory.push(calculator.operand);
      calculator.memory.push(buttonVal);
      $('#screen')[0].innerText = buttonVal;
      calculator.operand = '';
    },
    clearMemory: function() {
      calculator.operand = '';
      calculator.memory = [];
      $('#screen')[0].innerText = '';
    },
    makeCalculation: function() {
      // Improve so it can perform operations on more than two numbers
      var numA = parseFloat(calculator.memory[0]),
        operation = calculator.memory[1],
        numB = parseFloat(calculator.memory[2])

      var resultRef ={
        '+': calculator.add(numA, numB),
        '-': calculator.subtract(numA, numB),
        '/': calculator.divide(numA, numB),
        '*': calculator.multiply(numA, numB)
      }

      var result = resultRef[operation];

      $('#screen')[0].innerText = Math.round(result * 100) / 100;
      calculator.memory.push('=');
    },
    memory: [],
    operand: ''
  }

  $('.btn').on('click', function() {
    var buttonVal = this.innerHTML;

    // Clear memory if a calculation has just been made
    if (calculator.memory[calculator.memory.length -1] === '=') {
      calculator.clearMemory();
    }

    if (buttonVal.match(/[+\-\/\*]/)) {
      return calculator.addToMemory(buttonVal);
    }

    if (buttonVal === '=') {
      calculator.memory.push(calculator.operand);
      return calculator.makeCalculation();
    }

    if (buttonVal === 'CLEAR') {
      return calculator.clearMemory();
    }

    calculator.operand += buttonVal;
    $('#screen')[0].innerText = calculator.operand;
  });
});