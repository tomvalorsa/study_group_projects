$(document).ready(function() {
  var calculator = {
    memory: [],
    operand: '',
    addToMemory: function(buttonVal) {
      this.memory.push(this.operand);
      this.memory.push(buttonVal);
      $('#screen')[0].innerText = buttonVal;
      this.operand = '';
    },
    clearMemory: function() {
      this.operand = '';
      this.memory = [];
      $('#screen')[0].innerText = '';
    },
    makeCalculation: function() {
      var result = Number(this.memory.shift()),
        pairs = [];

      while (this.memory.length > 0) { pairs.push(this.memory.splice(0, 2)); }

      pairs.forEach(function(pair) {
        var operation = pair[0],
          num = Number(pair[1]);

        switch(operation) {
          case '+':
            result += num;
            break;
          case '-':
            result -= num;
            break;
          case '/':
            result /= num;
            break;
          case 'x':
            result *= num;
            break;
        }
      });

      $('#screen')[0].innerText = Math.round(result * 100) / 100;
      calculator.memory.push('=');
    }
  }

  $('.btn').on('click', function() {
    var buttonVal = $(this).children()[0].innerHTML;

    // Clear memory if a calculation has just been made
    if (calculator.memory[calculator.memory.length -1] === '=') {
      calculator.clearMemory();
    }

    if (buttonVal.match(/[+\-\/x]/)) {
      return calculator.addToMemory(buttonVal);
    }

    if (buttonVal === '=') {
      calculator.memory.push(calculator.operand);
      return calculator.makeCalculation();
    }

    calculator.operand += buttonVal;
    $('#screen')[0].innerText = calculator.operand;
  });

  $('#clear').on('click', function() {
    return calculator.clearMemory();
  });
});