# Analizador Sintáctico

Este proyecto consiste en la creación de un analizador sintáctico personalizado que permite interpretar un lenguaje propio (o simplificado) y traducirlo a JavaScript ejecutable.


## Instalación

Clona este repositorio: git clone https://github.com/Dreamboy2006/52011.git


# Instrucciones de Uso


## ¿Que hace?

- Lee un archivo de entrada (por ejemplo, input.txt) o una línea de texto.
- Analiza léxica y sintácticamente la entrada para verificar si cumple las reglas del lenguaje.
- Si es válido:
    -	Muestra los tokens reconocidos.
    -	Construye el árbol de derivación.
    -	Usa un Visitor para traducir a JavaScript.
    -	Ejecuta el código traducido.
- Si hay errores:
    -	Los informa y no continúa con la ejecución.

## Requisitos Previos

-    Tener Node.js Instalado
-    Extension de ANTLR en visual studio code
-    Verificar que tengas los siguientes archivos: index.js, CustomAnalizadorVisitor, Analizador.g4, input.txt.

## Instrucciones
> [!IMPORTANT]
> 1. Clona el repositorio en tu pc.
> 2. Ingrese una cadena en el archivo "input.txt" que ya se encuentra en la carpeta y el programa lo leera. Si el programa no encuentra este archivo le pedira que ingrese manualmente una instruccion. 
> 3. En la consola busca la direccion de la carpeta e inicia el programa con el comando "npm start".
> 4. Ejecuta el programa.



## Ejemplo de uso
1. **Clonamos el repositorio.** <br> ![image](https://github.com/user-attachments/assets/519914a4-2287-4eba-b9c4-42d7b4bd0254) <br/>

2. **Editamos el _input.txt_.** <br> ![image](https://github.com/user-attachments/assets/8d59f7c6-4a52-4315-b0c4-72ea9035713e) <br/>

3. **Buscamos la carpeta.** <br> ![image](https://github.com/user-attachments/assets/be1709af-05e5-4020-9b34-8af8f630c131) <br/>

4. **Ejecutamos.** <br> ![image](https://github.com/user-attachments/assets/4c3cfab6-cddb-49a3-894e-cad886212cb0) <br/>






