function mostrar()
{
//Genero el número RANDOM entre 1 y 10 
	var numero;
	srand(time(NULL));

	numero = 1 + rand() % ((10+1) - 1);

	printf("%1",numero);

}//FIN DE LA FUNCIÓN