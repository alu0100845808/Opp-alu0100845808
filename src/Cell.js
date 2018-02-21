class Cell {
  constructor(text) {
    this.text = text.split("\n");
}

draw(width, height) { //crea la cell
    return this.getContent(width, height);
};

  getContent(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(line + " ".repeat(width - line.length));
    }

    return result;
}

minWidth()  {
    return this.text.reduce(function(minwidthrelative, line) { // bucle que busca el minimo absoluto Ej mas sencillos ->         //var numbers = [65, 44, 12, 4];//function getSum(maximorelativo, num) {	//document.write(total + " " + num + " "); //return Math.max(total, num);//}//function myFunction(item) {//document.getElementById("demo").innerHTML = numbers.reduce(getSum);//}
        return Math.max(minwidthrelative, line.length);
    }, 0);
};

minHeight()  {
    return this.text.length; //numero de columnas del array text
};

}

module.exports = Cell