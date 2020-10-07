/*alert("oula");*/

var myrtille = "Myrtille";
var nombre = 8;
var nombre2 = 2;
console.log("Coucou " + myrtille + ". Je te fais " + (nombre + nombre2) + " bisous.");

function getRandomInt(max) {
    return Math.floor(Math.random() *
        Math.floor(max));
}

console.log("Coucou " + myrtille + ". Je te fais " + (getRandomInt(11)) + " bisous.");

