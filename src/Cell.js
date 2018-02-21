class TCell {
  constructor(text) {
    this.text = text.split("\n");
}

draw = function(width, height) { //crea la cell
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || ""; //coje el texto en caso de que exista sino pone vacio
        result.push(line + " ".repeat(width - line.length)); //pone tantos espacios como necesite para llegar al minwith
    }
    return result;
};

minWidth = function() {
    return this.text.reduce(function(minwidthrelative, line) { // bucle que busca el minimo absoluto Ej mas sencillos ->         //var numbers = [65, 44, 12, 4];//function getSum(maximorelativo, num) {	//document.write(total + " " + num + " "); //return Math.max(total, num);//}//function myFunction(item) {//document.getElementById("demo").innerHTML = numbers.reduce(getSum);//}
        return Math.max(minwidthrelative, line.length);
    }, 0);
};

minHeight = function() {
    return this.text.length; //numero de columnas del array text
};

}