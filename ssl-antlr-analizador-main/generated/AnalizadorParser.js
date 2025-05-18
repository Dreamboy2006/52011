// Generated from c:/Users/lucia/OneDrive/Escritorio/Nueva carpeta/ssl-antlr-analizador-main/Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorListener from './AnalizadorListener.js';
import AnalizadorVisitor from './AnalizadorVisitor.js';

const serializedATN = [4,1,17,78,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,
28,8,1,10,1,12,1,31,9,1,1,2,1,2,1,2,1,2,3,2,37,8,2,1,3,1,3,1,3,1,3,1,3,1,
3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,
7,1,8,1,8,1,8,1,8,5,8,67,8,8,10,8,12,8,70,9,8,3,8,72,8,8,1,8,1,8,1,9,1,9,
1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,14,15,73,0,20,1,0,0,0,2,29,1,
0,0,0,4,36,1,0,0,0,6,38,1,0,0,0,8,44,1,0,0,0,10,50,1,0,0,0,12,55,1,0,0,0,
14,60,1,0,0,0,16,62,1,0,0,0,18,75,1,0,0,0,20,21,5,1,0,0,21,22,3,18,9,0,22,
23,5,6,0,0,23,24,3,2,1,0,24,25,5,7,0,0,25,1,1,0,0,0,26,28,3,4,2,0,27,26,
1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,3,1,0,0,0,31,29,1,0,
0,0,32,37,3,8,4,0,33,37,3,10,5,0,34,37,3,12,6,0,35,37,3,6,3,0,36,32,1,0,
0,0,36,33,1,0,0,0,36,34,1,0,0,0,36,35,1,0,0,0,37,5,1,0,0,0,38,39,5,2,0,0,
39,40,5,8,0,0,40,41,3,16,8,0,41,42,5,9,0,0,42,43,5,13,0,0,43,7,1,0,0,0,44,
45,5,3,0,0,45,46,5,8,0,0,46,47,3,14,7,0,47,48,5,9,0,0,48,49,5,13,0,0,49,
9,1,0,0,0,50,51,5,4,0,0,51,52,5,8,0,0,52,53,5,9,0,0,53,54,5,13,0,0,54,11,
1,0,0,0,55,56,5,5,0,0,56,57,5,8,0,0,57,58,5,9,0,0,58,59,5,13,0,0,59,13,1,
0,0,0,60,61,7,0,0,0,61,15,1,0,0,0,62,71,5,10,0,0,63,68,3,14,7,0,64,65,5,
12,0,0,65,67,3,14,7,0,66,64,1,0,0,0,67,70,1,0,0,0,68,66,1,0,0,0,68,69,1,
0,0,0,69,72,1,0,0,0,70,68,1,0,0,0,71,63,1,0,0,0,71,72,1,0,0,0,72,73,1,0,
0,0,73,74,5,11,0,0,74,17,1,0,0,0,75,76,5,16,0,0,76,19,1,0,0,0,4,29,36,68,
71];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorParser extends antlr4.Parser {

    static grammarFileName = "Analizador.g4";
    static literalNames = [ null, "'cola'", "'crear'", "'encolar'", "'desencolar'", 
                            "'verPrimero'", "'{'", "'}'", "'('", "')'", 
                            "'['", "']'", "','", "'!'" ];
    static symbolicNames = [ null, "COLA", "CREAR", "ENCOLAR", "DESENCOLAR", 
                             "VERPRIMERO", "LLAVE_IZQ", "LLAVE_DER", "PAREN_IZQ", 
                             "PAREN_DER", "CORA_IZQ", "CORA_DER", "COMA", 
                             "ADMIRACION", "NUMERO", "TEXTO", "ID", "WS" ];
    static ruleNames = [ "prog", "comandos", "operacion", "crear", "encolar", 
                         "desencolar", "verPrimero", "valor", "lista", "nombre" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorParser.ruleNames;
        this.literalNames = AnalizadorParser.literalNames;
        this.symbolicNames = AnalizadorParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.match(AnalizadorParser.COLA);
	        this.state = 21;
	        this.nombre();
	        this.state = 22;
	        this.match(AnalizadorParser.LLAVE_IZQ);
	        this.state = 23;
	        this.comandos();
	        this.state = 24;
	        this.match(AnalizadorParser.LLAVE_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comandos() {
	    let localctx = new ComandosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorParser.RULE_comandos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0)) {
	            this.state = 26;
	            this.operacion();
	            this.state = 31;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion() {
	    let localctx = new OperacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorParser.RULE_operacion);
	    try {
	        this.state = 36;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.encolar();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.desencolar();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 34;
	            this.verPrimero();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 35;
	            this.crear();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(AnalizadorParser.CREAR);
	        this.state = 39;
	        this.match(AnalizadorParser.PAREN_IZQ);
	        this.state = 40;
	        this.lista();
	        this.state = 41;
	        this.match(AnalizadorParser.PAREN_DER);
	        this.state = 42;
	        this.match(AnalizadorParser.ADMIRACION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	encolar() {
	    let localctx = new EncolarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorParser.RULE_encolar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(AnalizadorParser.ENCOLAR);
	        this.state = 45;
	        this.match(AnalizadorParser.PAREN_IZQ);
	        this.state = 46;
	        this.valor();
	        this.state = 47;
	        this.match(AnalizadorParser.PAREN_DER);
	        this.state = 48;
	        this.match(AnalizadorParser.ADMIRACION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	desencolar() {
	    let localctx = new DesencolarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorParser.RULE_desencolar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(AnalizadorParser.DESENCOLAR);
	        this.state = 51;
	        this.match(AnalizadorParser.PAREN_IZQ);
	        this.state = 52;
	        this.match(AnalizadorParser.PAREN_DER);
	        this.state = 53;
	        this.match(AnalizadorParser.ADMIRACION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	verPrimero() {
	    let localctx = new VerPrimeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AnalizadorParser.RULE_verPrimero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(AnalizadorParser.VERPRIMERO);
	        this.state = 56;
	        this.match(AnalizadorParser.PAREN_IZQ);
	        this.state = 57;
	        this.match(AnalizadorParser.PAREN_DER);
	        this.state = 58;
	        this.match(AnalizadorParser.ADMIRACION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AnalizadorParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AnalizadorParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(AnalizadorParser.CORA_IZQ);
	        this.state = 71;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14 || _la===15) {
	            this.state = 63;
	            this.valor();
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===12) {
	                this.state = 64;
	                this.match(AnalizadorParser.COMA);
	                this.state = 65;
	                this.valor();
	                this.state = 70;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 73;
	        this.match(AnalizadorParser.CORA_DER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, AnalizadorParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        this.match(AnalizadorParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorParser.EOF = antlr4.Token.EOF;
AnalizadorParser.COLA = 1;
AnalizadorParser.CREAR = 2;
AnalizadorParser.ENCOLAR = 3;
AnalizadorParser.DESENCOLAR = 4;
AnalizadorParser.VERPRIMERO = 5;
AnalizadorParser.LLAVE_IZQ = 6;
AnalizadorParser.LLAVE_DER = 7;
AnalizadorParser.PAREN_IZQ = 8;
AnalizadorParser.PAREN_DER = 9;
AnalizadorParser.CORA_IZQ = 10;
AnalizadorParser.CORA_DER = 11;
AnalizadorParser.COMA = 12;
AnalizadorParser.ADMIRACION = 13;
AnalizadorParser.NUMERO = 14;
AnalizadorParser.TEXTO = 15;
AnalizadorParser.ID = 16;
AnalizadorParser.WS = 17;

AnalizadorParser.RULE_prog = 0;
AnalizadorParser.RULE_comandos = 1;
AnalizadorParser.RULE_operacion = 2;
AnalizadorParser.RULE_crear = 3;
AnalizadorParser.RULE_encolar = 4;
AnalizadorParser.RULE_desencolar = 5;
AnalizadorParser.RULE_verPrimero = 6;
AnalizadorParser.RULE_valor = 7;
AnalizadorParser.RULE_lista = 8;
AnalizadorParser.RULE_nombre = 9;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_prog;
    }

	COLA() {
	    return this.getToken(AnalizadorParser.COLA, 0);
	};

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	LLAVE_IZQ() {
	    return this.getToken(AnalizadorParser.LLAVE_IZQ, 0);
	};

	comandos() {
	    return this.getTypedRuleContext(ComandosContext,0);
	};

	LLAVE_DER() {
	    return this.getToken(AnalizadorParser.LLAVE_DER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_comandos;
    }

	operacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionContext);
	    } else {
	        return this.getTypedRuleContext(OperacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterComandos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitComandos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitComandos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_operacion;
    }

	encolar() {
	    return this.getTypedRuleContext(EncolarContext,0);
	};

	desencolar() {
	    return this.getTypedRuleContext(DesencolarContext,0);
	};

	verPrimero() {
	    return this.getTypedRuleContext(VerPrimeroContext,0);
	};

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterOperacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitOperacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitOperacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_crear;
    }

	CREAR() {
	    return this.getToken(AnalizadorParser.CREAR, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(AnalizadorParser.PAREN_IZQ, 0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	PAREN_DER() {
	    return this.getToken(AnalizadorParser.PAREN_DER, 0);
	};

	ADMIRACION() {
	    return this.getToken(AnalizadorParser.ADMIRACION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCrear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitCrear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EncolarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_encolar;
    }

	ENCOLAR() {
	    return this.getToken(AnalizadorParser.ENCOLAR, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(AnalizadorParser.PAREN_IZQ, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PAREN_DER() {
	    return this.getToken(AnalizadorParser.PAREN_DER, 0);
	};

	ADMIRACION() {
	    return this.getToken(AnalizadorParser.ADMIRACION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterEncolar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitEncolar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitEncolar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DesencolarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_desencolar;
    }

	DESENCOLAR() {
	    return this.getToken(AnalizadorParser.DESENCOLAR, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(AnalizadorParser.PAREN_IZQ, 0);
	};

	PAREN_DER() {
	    return this.getToken(AnalizadorParser.PAREN_DER, 0);
	};

	ADMIRACION() {
	    return this.getToken(AnalizadorParser.ADMIRACION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterDesencolar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitDesencolar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitDesencolar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VerPrimeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_verPrimero;
    }

	VERPRIMERO() {
	    return this.getToken(AnalizadorParser.VERPRIMERO, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(AnalizadorParser.PAREN_IZQ, 0);
	};

	PAREN_DER() {
	    return this.getToken(AnalizadorParser.PAREN_DER, 0);
	};

	ADMIRACION() {
	    return this.getToken(AnalizadorParser.ADMIRACION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterVerPrimero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitVerPrimero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitVerPrimero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_valor;
    }

	NUMERO() {
	    return this.getToken(AnalizadorParser.NUMERO, 0);
	};

	TEXTO() {
	    return this.getToken(AnalizadorParser.TEXTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_lista;
    }

	CORA_IZQ() {
	    return this.getToken(AnalizadorParser.CORA_IZQ, 0);
	};

	CORA_DER() {
	    return this.getToken(AnalizadorParser.CORA_DER, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	COMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.COMA);
	    } else {
	        return this.getToken(AnalizadorParser.COMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitLista(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitLista(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_nombre;
    }

	ID() {
	    return this.getToken(AnalizadorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AnalizadorParser.ProgContext = ProgContext; 
AnalizadorParser.ComandosContext = ComandosContext; 
AnalizadorParser.OperacionContext = OperacionContext; 
AnalizadorParser.CrearContext = CrearContext; 
AnalizadorParser.EncolarContext = EncolarContext; 
AnalizadorParser.DesencolarContext = DesencolarContext; 
AnalizadorParser.VerPrimeroContext = VerPrimeroContext; 
AnalizadorParser.ValorContext = ValorContext; 
AnalizadorParser.ListaContext = ListaContext; 
AnalizadorParser.NombreContext = NombreContext; 
