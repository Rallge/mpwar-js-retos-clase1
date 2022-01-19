//Reto 2
//¿Qué vale x después de las siguientes sentencias?
let x = x || 10
//Uncaught ReferenceError: x is not defined
//    at <anonymous>:1:9
let x = 5; x = x || 10;
//5
let x = 20; x = x || 10;
//20
let x = null; x = x || 10;
//10