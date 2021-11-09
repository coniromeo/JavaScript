function Socio (numeroCliente, nombre, edad, activo) {
    this.numeroCliente = numeroCliente;
    this.nombre = nombre;
    this.edad = edad;
    this.activo = activo;
}
const Socio1 = new Socio( "0001", "Carlos", 23, false);
const Socio2 = new Socio("0002", "Coni", 34, true );
const Socio3 = new Socio("0003", "Florencia", 234, true );
const Socio4 = new Socio("0004", "Laura", 24, false );
const Socio5 = new Socio("0005", "Hugo", 66, true );


console.log(Socio1);
console.log(Socio2);
console.log(Socio3);
console.log(Socio4);
console.log(Socio5);