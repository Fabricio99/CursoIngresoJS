function mostrar()
//while(isNaN(numero));
{

    //var respuesta='si';
    var numero;
    var contador=0;
    var acumulador=0;
    var respuesta='si';

    numero=prompt("Ingrese un numero");
    numero=parseInt(numero);
    do
    {
        numero=prompt("Error ingrese un numero valido");
        numero=parseInt(numero);
    }while(isNaN(numero));

    respuesta=prompt("Desea ingresar otro numero? 'si/no'");

        while(respuesta!='si' && respuesta!='no')
        {
            respuesta=prompt("Error, vuelva a ingresar 'si/no'");
        }
        acumulador+=numero;
        while(respuesta=='si')
        {
            contador++;
            numero=prompt("Ingrese un numero");
            numero=parseInt(numero);
            acumulador+=numero;
            respuesta=prompt("Desea ingresar otro numero? 'si/no'");
            while(respuesta!='si' && respuesta!='no')
        {
            respuesta=prompt("Error, vuelva a ingresar 'si/no'");
        }
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN