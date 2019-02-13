function mostrar()
{
  var precio;
  var aumento; 
  var final;

  precio = prompt("ingrese precio");
  precio = parseInt(precio);
  aumento = precio * 10/100;
  final = precio + aumento;

  alert("El precio del producto es "+precio+" con tarjeta tiene un recargo del 10% que seria "+aumento+" costandole un final de "+final);

  
  /*var nombre;
  var localidad;

  nombre = elNombre.value;
  localidad = laLocalidad.value;

  alert("Usted se llama "+nombre+" y vive en "+localidad);*/
}
