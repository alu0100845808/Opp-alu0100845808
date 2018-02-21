var Cell = require("Cell"); //necesita el constructor de celda

class RCell extends Cell {
  constructor(text) {
    super(text);
  }

  draw(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(" ".repeat( width - line.length) + line);
    }
    return result;
  };
}
module.exports = RCell