//Requisitos de evaluación
//-Escribir un script simple que muestre mensajes en la consola utilizando console.log()
//-Usar prompt() para recibir datos del usuario.
//-Mostrar mensajes personalizados mediante el uso de alert()
//-Pedir al usuario que ingrese dos números y almacenarlos en variables.
//-Implementar las operaciones básicas de suma, resta, multiplicación y división.
//-Usar estructuras condicionales como if, else y switch para evaluar diferentes situaciones.
//-Usar los bucles for y while para recorrer los arreglos creados.
//-Implementar una función específica que permita filtrar elementos del arreglo según una condición determinada

//-Llamar funciones dentro de otras funciones para optimizar la estructura del código.
//-Crear un objeto que contenga propiedades y valores definidos.
//-Implementar métodos (funciones internas) dentro de un objeto.
//-Usar un arreglo de objetos y recorrerlo utilizando los métodos map() o forEach()}

//-Crear un arreglo que contenga una lista de elementos.
//-Definir variables utilizando las palabras clave let y const
const historialCalculo= [];

//-Crear funciones individuales para cada una de las operaciones matemáticas.
//-Implementar una función que reciba parámetros y retorne un resultado.
function suma(a, b){return a + b;}
function resta(a, b){return a - b;}
function multiplicacion(a, b){return a * b;}
function division(a, b){
    if (b === 0) return "Error 👎: No se puede dividir por cero";
    return a / b;
}
