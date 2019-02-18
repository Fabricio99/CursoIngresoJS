function mostrar()
{
//tomo la edad  
  var edadIngresada;
  var mensaje;
  edadIngresada = edad.value;
  edadIngresada = parseInt(edadIngresada);

  if(edadIngresada>18)
  {
    mensaje="Mayor";
  }else
  {
    if(edadIngresada<13)
    {
      mensaje="Niño";
    }else
    {
      mensaje="Adolescente";
    }
  }

  alert(mensaje);
}//FIN DE LA FUNCIÓN