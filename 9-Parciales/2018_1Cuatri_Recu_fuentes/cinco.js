function mostrar()
//*cada habitacion de un hotel tiene un precio, hay promociones segun el tipo de pago, si es con tarjeta visa
//un 10%, si es por paypal un 15%, por mercadoPago un 10%, efectivo 20%,cualquier otro medio solo un 5%
//Si compraste el paquete "todoincluido"y pagas con paypal se te suma un 10% al descuento.
//si pagas en efectivo, tenes varias opciones, el paquete "soloDesayunos" te suma un 10% al descuento
//si el paquete es "todoincluido" te suma un 15% y para el resto de los paquetes no tiene descuento adicional

{
	var tarjeta;
	var descuentoVisa;
	var recargo;
	var efectivo;
	var medioDePago;
	var suma;
	var precioFinal;
	var mensaje;
	var precio;

 	precio=prompt("Elija el precio");
 	medioDePago=prompt("Elija medio de pago");

 	precio=parseInt(precio);

 	descuentoVisa=precio*10/100
    



	alert(mensaje);
}
