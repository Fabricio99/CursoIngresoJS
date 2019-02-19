function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

switch(mesDelAño)
{
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
	mensaje="Tiene 30 dias";
	   break;
	case "Febrero":
	mensaje="Tiene 28 dias";
	   break;

	default:
	mensaje="Tiene 31 dias";
}
alert(mensaje);
//alert (mesDelAño);
}//FIN DE LA FUNCIÓN