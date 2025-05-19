# Analizador Sintáctico

Este proyecto consiste en la creación de un analizador sintáctico personalizado que permite interpretar un lenguaje propio (o simplificado) y traducirlo a JavaScript ejecutable.


## Instalación

Clona este repositorio: git clone https://github.com/Dreamboy2006/52011.git


# Instrucciones de Uso
```sh

## ¿Que hace?

- Lee un archivo de entrada (por ejemplo, input.txt) o una línea de texto.
- Analiza léxica y sintácticamente la entrada para verificar si cumple las reglas del lenguaje.
- Si es válido:
    •	Muestra los tokens reconocidos.
    •	Construye el árbol de derivación.
    •	Usa un Visitor para traducir a JavaScript.
    •	Ejecuta el código traducido.
- Si hay errores:
    •	Los informa y no continúa con la ejecución.

## Requisitos Previos

-Tener Node.js Instalado
-Extension de ANTLR en visual studio code
-Verificar que tengas los siguientes archivos: index.js, CustomAnalizadorVisitor, Analizador.g4, input.txt.

## Instrucciones

1. Clona el repositorio en tu pc 
2. En la consola busca la direccion de la carpeta e inicia el programa con el comando "npm start".
3. Ingrese una cadena en el archivo "input.txt" y el programa lo leera. Si el programa no encuentra este archivo le pedira que ingrese manualmente una instruccion. 
4. Ejecuta el programa.

## Ejemplo de uso
1. En cmd 





