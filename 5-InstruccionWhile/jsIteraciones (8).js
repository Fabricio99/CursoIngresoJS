function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var rta=true;
	var num;
	while(rta==true)	
	{
		num = prompt("Ingrese un número");
		if(num == null)
		//si cancelo salgo del while
		{
			break;
		}
		num = parseInt(num);
		while(isNaN(num)==true);
		//valido que ingrese un número
		{
			alert("Entrada incorrecta, por favor ingrese un número válido");
			continue
		}
		if(num>0)
		//si el número es positivo lo sumo
		{
			num = parseInt(num);
			positivo += num;
			contador++
			rta = confirm("¿Desea seguir ingresando números?");	
		}
		else if(num!=0)
		//si el número es negativo lo multiplico
		{
			negativo *= num;
			contador++
			rta = confirm("¿Desea seguir ingresando números?");
		}
	}
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN