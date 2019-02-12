function mostrar()
{
//tomo la edad  
  var edadIngresada;
  edadIngresada=edad.value;
  edadIngresada=parseInt(edadIngresada);

  if(edadIngresada>17)
  {
    alert("Mayor");
  }
  else(edadIngresada<17)
  {
  	alert("Menor");
  }
}//FIN DE LA FUNCIÓN