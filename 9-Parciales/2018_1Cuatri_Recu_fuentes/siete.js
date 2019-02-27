function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var sexo;
	var sexoNotaMasBaja;
	var cantidadVaronesMayorASeis;
	var nota;
	var notaMinima;

	while(contador<5)
	{   
		nota = prompt("Ingrese nota:");
		nota = parseInt(nota);
		while (isNaN(nota) == true || nota<0 || nota>10)
		{
			nota=prompt("Error, ingrese nota");
			nota=parseInt(nota);
		}
		sexo=prompt("Ingrese sexo");
		while (isNaN(sexo) == false || sexo != "f" && sexo != "m");
		{
			sexo=prompt("Error, ingrese su sexo");
	    }

	    acumulador=acumulador+nota;
	    if(contador==0)
	    {
	    	notaMinima=nota;
	    	sexoNotaMasBaja=sexo;
	    }
	    else
	    {
	    	if(notaMinima>nota)
	    	{
	    		notaMinima=nota;
	    		sexoNotaMasBaja=sexo;
	    	}

	    }

	    if(nota> 5 && sexo=="m")
	    {
	    	cantidadVaronesMayorASeis=cantidadVaronesMayorASeis+1;
	    }




		contador=contador+1;
    }

    alert("La nota mas baja es: "+notaMinima+ " y su sexo es "+sexoNotaMasBaja);
    alert()



}
