/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var resultado;

	numero1=numeroUno.value;
	numero1=parseInt(numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);

	resultado=numero1+numero2;

	alert("El resultado es: "+resultado);
}

function restar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1=numeroUno.value;
	numero1=parseInt(numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);

	resultado=numero1-numero2;

	alert("El resultado es: "+resultado);
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var resultado;

	numero1=numeroUno.value;
	numero1=parseInt(numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);

	resultado=numero1*numero2;

	alert("El resultado es: "+resultado);
}

function dividir()
{
	var numero1;
	var numero2;
	var resultado;

	numero1=numeroUno.value;
	numero1=parseInt(numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);

	resultado=numero1/numero2;

	alert("El resultado es: "+resultado);
}

