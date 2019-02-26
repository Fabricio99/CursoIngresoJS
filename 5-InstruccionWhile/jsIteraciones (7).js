function mostrar()
//while(isNaN(numero));
{

	var contador=0;
	var acumulador=0;
	var numero;
    var respuesta='si'

    numero=prompt("Ingrese un numero");

    while(respuesta != 'no')
    {
    	respuesta=confirm('Desea continuar?');

     do 
     {
	 numero=prompt("Ingrese un numero");
	 numero=parseInt(numero);
     }
     while(isNaN(numero));
    }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN