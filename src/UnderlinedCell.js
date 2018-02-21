var Cell = require("Cell");

class UnderlinedCell extends Cell {
  constructor(inner) {
    super(inner);
  }

  draw (width, height) {
    return this.getContent(width, height)
            .concat(["-".repeat(width)]);
  }
}

module.exports = UnderlinedCell