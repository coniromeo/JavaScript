let nombre = prompt("Bienvenido al simulador de prestamos. como es tu nombre?");
let monto = prompt("Cuanto Dinero queres solicitar?");
let cuotas = prompt("En cuantas cuotas queres devolver el prestamo?");
let valorCuota = (monto/cuotas)*2;

alert ( "hola " + nombre + "vas a pedir " + monto + "y lo vas a devolver en " + cuotas + ". El valor de la cuota mensual será de " + valorCuota);
