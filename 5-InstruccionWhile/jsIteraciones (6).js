function mostrar()
{//Contador, acumulador, banderas. Un contador algo que cuenta cosas, una variable
//+ una constante.contador++ consiste en tomar su valor y sumarlo +1. si es
//++contador lo que hace es sumarlo en la linea de abajo.
//Acumulador = es una variable + una variable, Acumulador = acumulador+variable
//acumulador += num. acumulador/contador = promedio.
//Bandera: es una variable, variable+valor para saber cuando se ejecuta algo.
//while(){
//f(bandera)
//bandera=false;
//}
	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
	{
		contador++;
		numero=prompt("Ingrese 5 numeros");
		numero=parseInt(numero);
		acumulador+=numero;
	}


    document.getElementById('suma').value=acumulador;
    document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN