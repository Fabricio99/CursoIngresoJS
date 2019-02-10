function mostrar()
{
	var precio=prompt("Ingrese precio ");
	precio=parseInt(precio);
	var descuento1=prompt("ingrese descuento ");
	var descuento2=precio*descuento1/100;
	var final;
	final=precio-descuento2;

	elPrecioFinal.value=final;
}
