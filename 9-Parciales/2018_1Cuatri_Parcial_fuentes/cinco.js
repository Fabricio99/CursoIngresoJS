function mostrar()
{
var planeta=prompt("Ingrese nombre del planeta");
var mensaje;
console.log(planeta);

switch(planeta)
{
	case "tierra":
	mensaje="Aca vivimos";
	   break;
	case "venus":
	case "mercurio":
	mensaje="Aca hace mas calor";
	   break;
	case "marte":
	case "júpiter":
	case "saturno":
	case "urano":
	case "neptuno":
	mensaje="Aca hace mas frio";
	   break;
	default:
	mensaje="Ingrese un nombre válido, aclaración: los nombres se ingresan en minúsculas";
}

alert(mensaje);
}
