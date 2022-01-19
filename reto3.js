/* Reto 3
Ejecuta las siguientes sentencias: */
parseInt(1e1)
//10
parseInt('1e1')
//1
parseFloat('1e1')
//10
isFinite(0/10)
//true
isFinite(20/0)
//false
isNaN(0/0)
//true
isNaN(parseInt('0/0'))
//false
isNaN(parseInt(NaN))
//true