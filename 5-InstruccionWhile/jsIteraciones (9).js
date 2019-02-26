function mostrar()
{

	var contador=0;
	// declarar variables
	var max; 
	var min;
	var bandera=true;
	var respuesta='si';
    var numero;
    
    numero=prompt('Ingrese un numero');

	while(respuesta!='no')
	{
		respuesta=prompt('Desea continuar?');

		do
		{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);
		}
		while(isNaN(numero));

		if(bandera)
		{
			max=numero;
			min=numero;
			bandera=false;
		}
		else
		{
		}


	}

	if(numero>max)
	{
		max=numero;
	}
	if(numero<min)
	{
        min=numero;
	}




}//FIN DE LA FUNCIÓN