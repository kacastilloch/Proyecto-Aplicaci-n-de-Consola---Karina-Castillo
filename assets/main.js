//Requisitos de evaluación
//-Pedir al usuario que ingrese dos números y almacenarlos en variables.
//-Implementar las operaciones básicas de suma, resta, multiplicación y división.
//-Usar estructuras condicionales como if, else y switch para evaluar diferentes situaciones.
//-Llamar funciones dentro de otras funciones para optimizar la estructura del código.


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

function guardarCalculo(tipo, num1, num2, simbolo, resultado) {
    //-Crear un objeto que contenga propiedades y valores definidos.
    const registro = {
        operacion: tipo,
        expresion: `${num1} ${simbolo} ${num2}`,
        resultado: resultado,
        //-Implementar métodos (funciones internas) dentro de un objeto.
        resumenCalculo: function() {
            return `${this.operacion}: ${this.expresion} = ${this.resultado}`;
        }
    };
    historialCalculo.push(registro);
    //-Escribir un script simple que muestre mensajes en la consola utilizando console.log()
    console.log(`Calculo registrado: ${registro.expresion} = ${registro.resultado}`);
}

//-Implementar una función específica que permita filtrar elementos del arreglo según una condición determinada
function buscarOperacion(){
    if (historialCalculo.length === 0) {
        alert("No hay cálculos registrados aún.");//-Mostrar mensajes personalizados mediante el uso de alert()
        return;
    }
    //-Usar prompt() para recibir datos del usuario.
    let tipoOperacion = prompt("Ingrese el tipo de operación a buscar (suma, resta, multiplicacion, division):").toLowerCase();
    let resultados = "Resultados encontrados:\n";
    let contador = 0;

    //-Usar los bucles for y while para recorrer los arreglos creados.
    for (let i = 0; i < historialCalculo.length; i++) {
        let calc = historialCalculo[i];
        if (calc.operacion === tipoOperacion) {
            resultados += calc.resumenCalculo() + "\n";
            contador++;
        }
    }
    if (contador === 0) {
        alert("No se encontraron resultados para la operación solicitada.");
    } else {
        alert(resultados);
    }
}

function mostralHistorial(){
    if (historialCalculo.length === 0) {
        alert("No hay cálculos registrados aún.");
        return;
    }
    //-Utilizar los métodos map() o forEach()
    let mensaje = "Historial de Cálculos:\n";
    historialCalculo.forEach((calc, index) => {
        mensaje += `${index + 1}. ${calc.resumenCalculo()}\n`;
    });
    alert(mensaje);

    console.group("Historial de Cálculos");//este console.group es para organizar mejor la salida en consola
    console.table(historialCalculo);//muestra el historial en formato tabla en la consola
    console.groupEnd();//cierra el grupo de consola
}