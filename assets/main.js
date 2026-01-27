//Requisitos de evaluación :D

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

function iniciarCalculadora() {
    console.log("Bienvenido a la Calculadora!");

    let continuar = true;
    while (continuar) {
        let opcion = prompt("Seleccione una operación:\n1. Suma ➕\n2. Resta➖\n3. Multiplicación✖️\n4. División➗\n5. Ver Historial\n6. Buscar Operación🕵🏼\n7. Salir");
        //-Usar estructuras condicionales como if, else y switch para evaluar diferentes situaciones.
        switch (opcion) {
            case '1': case '2': case '3': case '4':
                realizarOperacion(opcion);
                break
            case '5':
                mostralHistorial();
                break;
            case '6':
                buscarOperacion();
                break;
            case '7':
                continuar = false;
                alert("Gracias por usar la calculadora. ¡Hasta luego!");
                console.log("Calculadora finalizada.");
                break;
            default:
                alert("Opción no válida. Por favor, seleccione una opción del 1 al 7.");
                break;    
            }
        }
    }

function realizarOperacion(opcion) {
    //-Pedir al usuario que ingrese dos números y almacenarlos en variables.
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    let resultado;
    let tipoOperacion = "";
    let simbolo = "";
    //-Implementar las operaciones básicas de suma, resta, multiplicación y división.
    //-Llamar funciones dentro de otras funciones para optimizar la estructura del código.
    if (opcion === '1') {
        resultado = suma(num1, num2);
        tipoOperacion = "suma";
        simbolo = "+";
    }else if (opcion === '2') {
        resultado = resta(num1, num2);
        tipoOperacion = "resta";
        simbolo = "-";
    }else if (opcion === '3') {
        resultado = multiplicacion(num1, num2);
        tipoOperacion = "multiplicacion";
        simbolo = "x";
    }else if (opcion === '4') {
        resultado = division(num1, num2);
        tipoOperacion = "division";
        simbolo = "/";
    }
    alert(`El resultado de la ${tipoOperacion} es: ${resultado}`);
    guardarCalculo(tipoOperacion, num1, num2, simbolo, resultado);
}