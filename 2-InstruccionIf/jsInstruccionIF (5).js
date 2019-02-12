function mostrar()
{
//tomo la edad  
  var edadIngresada;
  edadIngresada=edad.value;
  edadIngresada=parseInt(edadIngresada);

  if(edadIngresada<13 || edadIngresada>17)
  {
  	alert("No es adolescente");
  }
  

}//FIN DE LA FUNCIÓN