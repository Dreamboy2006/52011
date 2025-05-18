grammar Analizador;

// Reglas sintácticas
prog       : COLA nombre LLAVE_IZQ comandos LLAVE_DER ;
comandos   : (operacion)* ;
operacion  : encolar
           | desencolar
           | verPrimero
           | crear
           ;

crear      : CREAR PAREN_IZQ lista PAREN_DER ADMIRACION ;
encolar    : ENCOLAR PAREN_IZQ valor PAREN_DER ADMIRACION ;
desencolar : DESENCOLAR PAREN_IZQ PAREN_DER ADMIRACION ;
verPrimero : VERPRIMERO PAREN_IZQ PAREN_DER ADMIRACION ;

valor      : NUMERO | TEXTO ;
lista      : CORA_IZQ (valor (COMA valor)*)? CORA_DER ;
nombre     : ID ;

// Tokens léxicos

COLA        : 'cola' ;
CREAR       : 'crear' ;
ENCOLAR     : 'encolar' ;
DESENCOLAR  : 'desencolar' ;
VERPRIMERO  : 'verPrimero' ;

LLAVE_IZQ   : '{' ;
LLAVE_DER   : '}' ;
PAREN_IZQ   : '(' ;
PAREN_DER   : ')' ;
CORA_IZQ    : '[' ;
CORA_DER    : ']' ;
COMA        : ',' ;
ADMIRACION  : '!' ;

NUMERO      : [0-9]+ ;
TEXTO       : '"' (~["\r\n])* '"' ;
ID          : [a-zA-Z_][a-zA-Z_0-9]* ;
WS          : [ \t\r\n]+ -> skip ;
