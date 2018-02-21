var Cell = require("Cell");

class UnderlinedCell extends Cell {
  constructor(inner) {
    super(inner);
}

  draw = function(width, height) {
    return this.inner.draw(width, height - 1)
      .concat(["-".repeat(width)]);
  };
}
module.exports = UnderlinedCell