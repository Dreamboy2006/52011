# Analizador Sintáctico

Este proyecto consiste en la creación de un analizador sintáctico personalizado que permite interpretar un lenguaje propio (o simplificado) y traducirlo a JavaScript ejecutable.


## Instalación

Clona este repositorio: git clone https://github.com/Dreamboy2006/52011.git


# Instrucciones de Uso


## ¿Que hace?

- Lee un archivo de entrada (por ejemplo, input.js) o una línea de texto.
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

Clona el repositorio en tu pc
En la consola busca la direccion de la carpeta e inicia el programa con el comando "npm start".
El programa te pedira que escribas la entrada manualmente. //puedes modificarlo dentro de launch,json y cambiar la entrada por archivo.
Ejecuta el programa.


