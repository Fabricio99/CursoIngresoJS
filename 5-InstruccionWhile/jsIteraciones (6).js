function mostrar()
{

	var contador=0;
	var acumulador=0;

	acumulador = prompt("ingrese 5 numeros");
	acumulador = parseInt(contador);

	while(acumulador>5)
	{
		acumulador = prompt("ingrese 5 numeros");
	}



    document.getElementById('suma').value=acumulador;
    document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN