function mostrar()
{
   /*al realizar una compra, si compra de mas de dos productos se realiza un descuento del 10%
   y si supera los $2000 se agrega un descuento adicional de 15%, si el pago es con 
   tarjeta y no efectivo al precio final se le agrega un 10% de recargo*/

   var producto;
   var precio;
   var metodoPago;
   var descuento1;
   var descuento2;
   var recargo;
   var precioFinal1;
   var precioFinal2;
   var precioFinal3;
   var precioTotal;

   producto = prompt("Ingrese la cantidad de productos");
   precio = prompt("Ingrese el monto a pagar");
   metodoPago = prompt("Ingrese el metodo de pago");

   producto = parseInt(producto);
   precio = parseInt(precio);

   descuento1 = precio *10/100;
   descuento2 = precio *15/100;
   recargo = precio *10/100;

   if(producto >=2)
   {
      precioFinal1=precio-descuento1;
   }else
   {
      (precio>=2000)
      precioTotal=precio-descuento2
   }
