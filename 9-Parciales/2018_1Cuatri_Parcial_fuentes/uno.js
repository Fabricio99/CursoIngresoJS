
function mostrar()
{
    var nombre1 = prompt("Nombre y apellido1");
    var nombre2 = prompt("Nombre y apellido2")
    var edad1 = prompt("Edad1");
    edad1 = parseInt(edad1);
    var edad2 = prompt("Edad2");
    edad2 = parseInt(edad2);

    resultado = edad1 + edad2;

    alert("Ustedes son "+nombre1+" y "+nombre2+" y sus edades son "+edad1+" y "+edad2+" y la suma de sus edades es "+resultado);   
	/*var base = prompt("Ingresa la base ");

	var altura = prompt("Ingresa la altura ");

	Perímetro = (2*altura) + (2*base);

	alert("El perímetro del rectangulo es "+Perímetro);*/
}
