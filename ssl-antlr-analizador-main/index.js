import AnalizadorLexer from "./generated/AnalizadorLexer.js";
import AnalizadorParser from "./generated/AnalizadorParser.js";
import CustomAnalizadorVisitor from "./CustomAnalizadorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;
// Intento leer la entrada desde el archivo input - en forma sincrónica.
    try {
        input = fs.readFileSync('input.js', 'utf8');
    } catch (err) { // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena();
        console.log(input);
    }

    let errores = false;
                                                                            // Proceso la entrada con el analizador para obtener el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new AnalizadorLexer(inputStream);
                                                                            //Verificar si el lexer está generando tokens 
    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error(" No se generaron tokens. Verifica la entrada y la gramática.");
        errores = true;
    } else {
        console.log("\nTabla de Tokens y Lexemas:");
        console.log("--------------------------------------------------");
        console.log("| Lexema         | Token                         |");
        console.log("--------------------------------------------------");
        for (let token of tokens) {
            const tokenType = AnalizadorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
            const lexema = token.text;
            console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
        }
        console.log("--------------------------------------------------");
    }

    if (!errores) {
        inputStream = CharStreams.fromString(input);
        lexer = new AnalizadorLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new AnalizadorParser(tokenStream);
        let tree = parser.prog();

        if (parser.syntaxErrorsCount > 0) {
            console.error("\n Se encontraron errores de sintaxis en la entrada.");
            errores = true;
        } else {
            console.log("\nEntrada válida.");
            const cadena_tree = tree.toStringTree(parser.ruleNames);
            console.log(`Árbol de derivación: ${cadena_tree}`);

            const visitor = new CustomAnalizadorVisitor();
            const jsCode = visitor.visit(tree);

            console.log("\n Código JavaScript generado:\n");
            console.log(jsCode);

            console.log("\n▶ Ejecutando código:\n");
            try {
                eval(jsCode);
            } catch (e) {
                console.error(" Error al ejecutar el código generado.");
            }
        }
    } else {
        console.error("\n No se puede realizar la transcripción.");
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
