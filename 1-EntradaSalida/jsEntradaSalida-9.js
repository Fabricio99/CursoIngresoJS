/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoIngresado;
	var aumento;
	var sueldoFinal;

	sueldoIngresado=sueldo.value;
	sueldoIngresado=parseInt(sueldoIngresado);
	aumento=sueldoIngresado*10/100;
	sueldoFinal=sueldoIngresado+aumento;

	resultado.value=sueldoFinal;



	
}
