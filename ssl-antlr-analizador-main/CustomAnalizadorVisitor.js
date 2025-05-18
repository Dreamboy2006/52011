import AnalizadorVisitor from './generated/AnalizadorVisitor.js';
import AnalizadorParser from './generated/AnalizadorParser.js';


class CustomAnalizadorVisitor extends AnalizadorVisitor {
    constructor() {
        super();
        this.jsCode = "";
        this.queueName = "";
    }


    visitProg(ctx) {
        this.queueName = ctx.nombre().getText();
        this.jsCode += `let ${this.queueName} = [];\n`;
        this.visit(ctx.comandos());
        return this.jsCode;
    }


    visitComandos(ctx) {
        for (let op of ctx.operacion()) {
            this.visit(op);
        }
    }


    visitCrear(ctx) {
        const lista = this.visit(ctx.lista());
        this.jsCode += `${this.queueName} = [${lista}];\n`;
    }


    visitEncolar(ctx) {
        const valor = this.visit(ctx.valor());
        this.jsCode += `${this.queueName}.push(${valor});\n`;
    }


    visitDesencolar(ctx) {
        this.jsCode += `${this.queueName}.shift();\n`;
    }


    visitVerPrimero(ctx) {
        this.jsCode += `console.log(${this.queueName}[0]);\n`;
    }


    visitLista(ctx) {
        return ctx.valor().map(v => this.visit(v)).join(', ');
    }


    visitValor(ctx) {
        if (ctx.NUMERO()) return ctx.NUMERO().getText();
        if (ctx.TEXTO()) return ctx.TEXTO().getText();
        return 'undefined';
    }
}


export default CustomAnalizadorVisitor;