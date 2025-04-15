/*Java Script es un lenguaje de programación que se puede aplicar a un documento HTML y usarse
para crear interactividad dinámica en los sitios web se pueden crear carruseles,
galerías de imágenes, diseños fluctuantes, respuestas a las pulsaciones de botones,
juegos, animaciones 2D y gráficos 3D, aplicaciones integradas basadas en bases de datos*/

/*Existen 2 maneras en las que podemos trabajar con JS en nuestra página web:
1# Al final del body de la página se abre la etiqueta <script> y dentro de ella se usa el lenguaje.
#2 En un archivo externo enlazado con el archivo HTML de la página.*/

//Generar variables en java script//
var nombre = "Byron"; //al usar var la variable creada puede usarse en todo el código//
alert("El nombre del estudiante es  " + nombre);

 
let edad0 = 20; //let se usa para una estructura de código como funciones o métodos//
console.log("La edad del estudiante es " + edad);

//variable de tipo constante: su valor no cambia nunca//
const PI = 2;
console.log(PI);

//Tipos de variable booleana - no se debe poner el tipo de dato ya que JS lo interpreta automáticamente//
mayorDeEdad = true;
console.log(mayorDeEdad);

//OPERADORES MATEMÁTICOS//

//SUMA//
var n1 = 5;
var n2 = 4;
var resultado = n1 +n2;
console.log("La suma de "+ n1 + " + " + n2 + " es igual a: " + resultado);
/*
RESTA: -
MULTIPLICACIÓN: *
DIVISIÓN: /
MÓDULO: % (retorna el residuo de una división)
*/
 
/*
OPERADORES DE ASIGNACIÓN

= igualdad : Asigna un valor a una variable.

== (Equivalente) Compara si dos operadores son iguales y devuelve un resultado booleano

!= (Distinto de) Compara dos operadores y verifica que no sean iguales

OPERADORES LÓGICOS

|| (or) operador disyunción: para ser true debe cumplirse al menos una de las 2 condiciones.

===: Compara si los operandos son iguales y del mismo tipo

&& (and): Verifica que se cumplan las 2 condiciones para ejecutar 

!(Negación): Niega un valor booleano.

*/

//Alerta en pantalla con mensaje personalizado//
alert("Hola mundo desde JS")
//variable//
var edad = 0;
//Genera una ventana para ingresar datos//
prompt("Cuál es tu edad?"); 
console.log(edad);
document.writeln("Tu edad es: " + edad);
document.writeln("<br>");

//MENSAJES//
document.writeln("Hola mundo desde JS");
/*Salto de línea con br*/
document.writeln("<br>");
document.writeln("Hola mundo desde JS");
document.writeln("<br>");   
document.writeln("Hola mundo desde JS");
document.writeln("<br>");

//ESTRUCTURA CONDICIONAL IF//
var n1 = 10;
var n2 = 10;

/*HTML Embebido en JavaScript--Podemos usar código HTML en JavaScript*/
document.writeln("<br>");
document.writeln("");

//IF-ELSE//
if (n1 > n2){
    console.log("El número " + n1 + " es mayor que el número " + n2 );
} else if(n1<n2){
    document.writeln("<br>");
    console.log("El número " + n1 + " es menor que el número " + n2);
} else{
    console.log("Los números son iguales");
}