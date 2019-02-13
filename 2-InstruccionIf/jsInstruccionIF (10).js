function mostrar()
{
//Genero el número RANDOM entre 1 y 10 
  var numeroRandom;

  numeroRandom=Math.floor((Math.random() * 10) + 1);
  console.log(numeroRandom);	
  
  if(numeroRandom>=9)
  {
  	alert("Excelente");
  }
}//FIN DE LA FUNCIÓN