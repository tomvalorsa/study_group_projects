var calculator = {
  add: function(a, b) { return a + b },
  subtract: function(a, b) {return a - b },
  divide: function(a, b) { return a / b },
  multiply: function(a, b) { return a * b },
  memory: []
}

$(document).ready(function() {
  
  $('.btn').on('click', function() {
    var buttonVal = this.innerHTML

    console.log(buttonVal)
  })

});