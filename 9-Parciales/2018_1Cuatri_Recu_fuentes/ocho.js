function mostrar()
{
	var datos;
	var cantidadNumPares;
	var cantidadNumImpares;
	var cantidadDeCeros;
	var promedioNumPositivos;
	var sumaNumNegativos;
	var numLetraMax;
	var numLetraMin;
	var letra;
	var contador=0;
	var acumulador=0;


	while(contador<2)
	{
		datos = prompt("Ingrese un numero entre -100 y 100");
		datos = parseInt(datos);
		while (isNaN(datos) == true || datos <-100 || datos >100)
		{
			datos=prompt("Error, ingrese un numero");
			datos=parseInt(datos);
		}

		letra = prompt("Ingrese una letra");
		while (IsNaN(letra) == false)
		{
			letra=prompt("Error, ingrese una letra");
		}

		acumulador=acumulador+datos;
	





		contador=contador+1;
	}































}
