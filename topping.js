let topping = prompt("que topping queres agregar");
let precio = 0.00;
let helado = 1.90;
let precioFinal = 0.00;

if(topping == "oreo"){
    precio = 1;
} else if (topping == "kitkat"){
    precio = 1.5;
} else if ( topping =="brownie"){
    precio = 0.75;
} else if (topping =="lacasitos"){
    precio = 0.95;
} else {
    console.log ("no tenemos ese topping");
    precio = 0;
}
precioFinal = helado + precio;
console.log ("el helado cuesta" + precioFinal);
