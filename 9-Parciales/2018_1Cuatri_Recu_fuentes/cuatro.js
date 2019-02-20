function mostrar()
//Ingresar cuatro importes, mostrar el mayor de la compra, indicar total, si supera 100$ se agrega un descuento de
//10%, si supera los 50$ el descuento es de 5%,en el caso de menos de 50$, sumar 15%
{
	var importe1;
	var importe2;
	var importe3;
	var importe4;
	var mayorImporte;
	var suma;
	var descuento;
	var recargo;
	var precioFinal;

	importe1=prompt("Ingrese el primer importe");
	importe2=prompt("Ingrese el segundo importe");
	importe3=prompt("Ingrese el tercer importe");
	importe4=prompt("Ingrese el cuarto importe");

	importe1=parseInt(importe1);
	importe2=parseInt(importe2);
	importe3=parseInt(importe3);
	importe4=parseInt(importe4);

	if(importe1>importe2 && importe1>importe3 && importe1>importe4)
	{
		mayorImporte=importe1;
	}
	else
	{
		if(importe2>importe1 && importe2>importe3 && importe2>importe4)
		{
			mayorImporte=importe2;
		}
		else
		{
			if(importe3>importe1 && importe3>importe2 && importe3>importe4)
			{
				mayorImporte=importe3;
			}
			else
			{
				if(importe4>importe1 && importe4>importe2 && importe4>importe3)
				{
					mayorImporte=importe4
				}
			}
		}
	}


	
}
