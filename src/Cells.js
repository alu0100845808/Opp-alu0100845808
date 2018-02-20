
function repeat(string, times) {  //duplica un strin x veces ejemplo repeat(hola,2)->holahola
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

function Cell(text) { //Constructor de celdas 
    this.text = text.split("\n"); //separa el texto por saltos de linea 
}

Cell.prototype.minWidth = function() {
    return this.text.reduce(function(minwidthrelative, line) { // bucle que busca el minimo absoluto Ej mas sencillos ->         //var numbers = [65, 44, 12, 4];//function getSum(maximorelativo, num) {	//document.write(total + " " + num + " "); //return Math.max(total, num);//}//function myFunction(item) {//document.getElementById("demo").innerHTML = numbers.reduce(getSum);//}
        return Math.max(minwidthrelative, line.length);
    }, 0);
};

Cell.prototype.minHeight = function() {
    return this.text.length; //numero de columnas del array text
};

Cell.prototype.draw = function(width, height) { //crea la cell
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || ""; //coje el texto en caso de que exista sino pone vacio
        result.push(line + repeat(" ", width - line.length)); //pone tantos espacios como necesite para llegar al minwith
    }
    return result;
};

module.exports = {
    Cell: Cell,
    repeat: repeat
}