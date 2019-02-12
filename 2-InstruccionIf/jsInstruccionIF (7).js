function mostrar()
{
//tomo la edad  
var edad;
var estado;

edad = document.getElementById('edad').value;
estado = document.getElementById('estadoCivil').value

if(edad < 18 && estado != "Soltero")
{
	alert("Es muy pequeño para no estar soltero");
}

}//FIN DE LA FUNCIÓN