
class StretchCell {
  constructor(inner,withd,height) {
    this.inner = inner;
    this.withd = withd;
    this.height = height;
}


  minWidth = function() {
    return Math.max(this.width,this.inner.minWidth());
  };

  minHeight = function() {
    return Math.max(this.height,this.inner.minHeight());
  };

  draw = function(width, height) {
    return this.inner.draw(width,height);
  };
}
module.exports = StretchCell