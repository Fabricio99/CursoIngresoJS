function mostrar()
{
//tomo la edad  
  var edadIngresada;
  edadIngresada=edad.value;
  edadIngresada=parseInt(edadIngresada);

  if(edadIngresada>18)
  {
  	alert("Usted no es adolescente");
  }
  if(edadIngresada<17 || edadIngresada>13)
  {
  	alert("Usted es adolescente");
  }
  if(edadIngresada<13)
  {
  	alert("Usted es niño/a")
  }
}//FIN DE LA FUNCIÓN