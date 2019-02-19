function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
console.log(mesDelAño);

switch(mesDelAño)
{
	case "Septiembre":
	case "Octubre":
	case "Noviembre":
	case "Diciembre":
	mensaje="Ya pasamos el frio, ahora calor!!!";
	   break;
	case "Julio":
	case "Agosto":
	mensaje="Abrigate que hace frio";
	   break;

	default:
	mensaje="Falta para el invierno";
}
alert (mensaje);

//alert (mesDelAño);
}//FIN DE LA FUNCIÓN