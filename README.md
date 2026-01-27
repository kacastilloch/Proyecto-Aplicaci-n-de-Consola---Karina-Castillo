/**
 * ========================================
 * CALCULADORA DE CONSOLA
 * ========================================
 * 
 * Autor: Karina Castillo Chandia
 * Descripción: Aplicación de calculadora interactiva que permite realizar
 * operaciones matemáticas básicas (suma, resta, multiplicación y división)
 * con un sistema de historial y búsqueda de operaciones.
 * 
 * ========================================
 * FUNCIONALIDADES PRINCIPALES
 * ========================================
 * 
 * 1. OPERACIONES MATEMÁTICAS
 *    - suma(a, b): Suma dos números
 *    - resta(a, b): Resta dos números
 *    - multiplicacion(a, b): Multiplica dos números
 *    - division(a, b): Divide dos números con validación de división por cero
 * 
 * 2. GESTIÓN DE HISTORIAL
 *    - guardarCalculo(): Almacena cada operación en un objeto con detalles
 *    - mostralHistorial(): Muestra todas las operaciones realizadas
 *    - Método resumenCalculo(): Genera un resumen formateado de cada cálculo
 * 
 * 3. BÚSQUEDA Y FILTRADO
 *    - buscarOperacion(): Filtra operaciones por tipo (suma, resta, etc.)
 *    - Recorre el historial y muestra coincidencias encontradas
 * 
 * 4. INTERFAZ DE USUARIO
 *    - iniciarCalculadora(): Inicia el menú principal interactivo
 *    - realizarOperacion(): Procesa la operación seleccionada
 *    - Menú con 7 opciones incluyendo operaciones, historial y búsqueda
 * 
 * ========================================
 * ESTRUCTURAS UTILIZADAS
 * ========================================
 * 
 * - Arrays: historialCalculo[] para almacenar registros
 * - Objetos: registro con propiedades y métodos internos
 * - Bucles: for, while para iteración
 * - Métodos Array: forEach(), map() para procesamiento
 * - Condicionales: if/else, switch para control de flujo
 * - console.group() y console.table() para visualización en consola
 * 
 * ========================================
 * REQUISITOS DE EVALUACIÓN CUBIERTOS
 * ========================================
 * 
 * ✓ Arreglos con elementos
 * ✓ Variables con let y const
 * ✓ Funciones con parámetros y retorno
 * ✓ Objetos con propiedades y métodos
 * ✓ console.log() para mensajes
 * ✓ alert() y prompt() para interacción
 * ✓ Filtrado de elementos del arreglo
 * ✓ Bucles for y while
 * ✓ Métodos forEach()
 * ✓ Estructuras condicionales if/else/switch
 * ✓ Operaciones matemáticas básicas
 * 
 