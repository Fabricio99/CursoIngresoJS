function mostrar()
//*cada habitacion de un hotel tiene un precio, hay promociones segun el tipo de pago, si es con tarjeta visa
//un 10%, si es por paypal un 15%, por mercadoPago un 10%, efectivo 20%,cualquier otro medio solo un 5%
//Si compraste el paquete "todoincluido"y pagas con paypal se te suma un 10% al descuento.
//si pagas en efectivo, tenes varias opciones, el paquete "soloDesayunos" te suma un 10% al descuento
//si el paquete es "todoincluido" te suma un 15% y para el resto de los paquetes no tiene descuento adicional

{
	var medioDePago;
	var precioFinal;
	var precio;
	var paquete;

 	precio=prompt("Elija el precio");
 	medioDePago=prompt("Elija medio de pago");
 	paquete=prompt("Puede elegir paquete todo incluido o solo desayuno");

 	precio=parseInt(precio);

 	switch(medioDePago)
 	{
 		case "tarjeta visa":
 		case "mercado pago":
 		descuento=10;
 		    break;

 		case "paypal":
 		    switch(paquete)
 		    {
 		    	case "todoincluido":
 		    	descuento=25;
 		    	    break;

 		    	default:
 		    	descuento=15;
 		    	     break;
 		    }
 		    break;

 		case "efectivo":
 		    switch(paquete)
 		    {
 		    	case "todoincluido":
 		    	descuento=35;
 		    	    break;

 		    	case "solodesayuno":
 		    	descuento=30;
 		    	    break;

 		    	default:
 		    	descuento=20;
 		    	    break;
 		    }
 		    break;

 		default:
 		descuento=5;
 		    break;
 	}

 	precioFinal=precio*descuento/100;
 	precioFinal=precio - descuento;

 	alert("Precio final de la compra: $"+precioFinal);
}
