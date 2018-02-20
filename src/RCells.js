var Cell = require("./Cell.js").Cell; //necesita el constructor de celda
var repeat = require("./Cell.js").repeat; //necesita el metodo repeat 

function RCell(text) { //se contruye como una celda normal
  Cell.call(this, text);
}

RCell.prototype = Object.create(Cell.prototype); //tienen las mismas funciones .....

RCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(repeat(" ", width - line.length) + line);
  }
  return result;
};

module.exports = {
  RCell: RCell
}