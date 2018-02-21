
class StretchCell {
  constructor(inner,withd,height) {
    this.inner = inner;
    this.withd = withd;
    this.height = height;
}


  minWidth () {
    return Math.max(this.width,this.inner.minWidth());
  };

  minHeight () {
    return Math.max(this.height,this.inner.minHeight());
  };

  draw (width, height) {
    return this.inner.draw(width,height);
  };
}
module.exports = StretchCell