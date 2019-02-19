function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

switch(laHora)
{
    case "7":
	case "8":
	case "9":
	case "10":
	case "11":
    mensaje="Es de mañana";
       break;
    if(laHora<20)
    mensaje="Es de noche";
       break;
    default:
    mensaje="Esa hora no existe";
}
alert(mensaje);
}//FIN DE LA FUNCIÓN