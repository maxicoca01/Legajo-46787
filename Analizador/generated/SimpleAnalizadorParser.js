// Generated from d:/Workspace/Facultad/ProyectoAnalizador/Analizador/SimpleAnalizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleAnalizadorListener from './SimpleAnalizadorListener.js';
import SimpleAnalizadorVisitor from './SimpleAnalizadorVisitor.js';

const serializedATN = [4,1,23,97,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,0,
1,1,1,1,1,1,3,1,30,8,1,1,2,1,2,1,2,1,2,1,2,3,2,37,8,2,1,2,1,2,1,2,1,3,1,
3,1,3,5,3,45,8,3,10,3,12,3,48,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,5,7,74,8,7,10,
7,12,7,77,9,7,1,7,1,7,1,8,1,8,1,8,5,8,84,8,8,10,8,12,8,87,9,8,1,9,1,9,1,
9,1,9,1,9,1,9,3,9,95,8,9,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,1,1,0,10,
13,95,0,23,1,0,0,0,2,29,1,0,0,0,4,31,1,0,0,0,6,41,1,0,0,0,8,49,1,0,0,0,10,
58,1,0,0,0,12,63,1,0,0,0,14,71,1,0,0,0,16,80,1,0,0,0,18,94,1,0,0,0,20,22,
3,2,1,0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,1,1,0,
0,0,25,23,1,0,0,0,26,30,3,4,2,0,27,30,3,8,4,0,28,30,3,12,6,0,29,26,1,0,0,
0,29,27,1,0,0,0,29,28,1,0,0,0,30,3,1,0,0,0,31,32,5,1,0,0,32,33,5,8,0,0,33,
34,5,15,0,0,34,36,5,20,0,0,35,37,3,6,3,0,36,35,1,0,0,0,36,37,1,0,0,0,37,
38,1,0,0,0,38,39,5,19,0,0,39,40,5,14,0,0,40,5,1,0,0,0,41,46,3,16,8,0,42,
43,5,16,0,0,43,45,3,16,8,0,44,42,1,0,0,0,45,48,1,0,0,0,46,44,1,0,0,0,46,
47,1,0,0,0,47,7,1,0,0,0,48,46,1,0,0,0,49,50,5,2,0,0,50,51,5,18,0,0,51,52,
3,10,5,0,52,53,3,16,8,0,53,54,5,14,0,0,54,55,3,10,5,0,55,56,5,17,0,0,56,
57,3,14,7,0,57,9,1,0,0,0,58,59,5,8,0,0,59,60,5,15,0,0,60,61,3,16,8,0,61,
62,5,14,0,0,62,11,1,0,0,0,63,64,5,3,0,0,64,65,5,4,0,0,65,66,5,5,0,0,66,67,
5,18,0,0,67,68,3,16,8,0,68,69,5,17,0,0,69,70,5,14,0,0,70,13,1,0,0,0,71,75,
5,6,0,0,72,74,3,2,1,0,73,72,1,0,0,0,74,77,1,0,0,0,75,73,1,0,0,0,75,76,1,
0,0,0,76,78,1,0,0,0,77,75,1,0,0,0,78,79,5,7,0,0,79,15,1,0,0,0,80,85,3,18,
9,0,81,82,7,0,0,0,82,84,3,18,9,0,83,81,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,
0,85,86,1,0,0,0,86,17,1,0,0,0,87,85,1,0,0,0,88,95,5,8,0,0,89,95,5,9,0,0,
90,91,5,18,0,0,91,92,3,16,8,0,92,93,5,17,0,0,93,95,1,0,0,0,94,88,1,0,0,0,
94,89,1,0,0,0,94,90,1,0,0,0,95,19,1,0,0,0,7,23,29,36,46,75,85,94];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleAnalizadorParser extends antlr4.Parser {

    static grammarFileName = "SimpleAnalizador.g4";
    static literalNames = [ null, "'let'", "'for'", "'console'", "'.'", 
                            "'log'", "'{'", "'}'", null, null, "'*'", "'/'", 
                            "'+'", "'-'", "';'", "'='", "','", "')'", "'('", 
                            "']'", "'['" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             "ID", "NUMBER", "MUL", "DIV", "ADD", "SUB", 
                             "SEMI", "ASSIG", "COM", "PARDER", "PARIZQ", 
                             "CORDER", "CORIZQ", "LETTER", "DIGIT", "WS" ];
    static ruleNames = [ "prog", "statement", "arrayDeclaration", "expressionList", 
                         "forStatement", "assignmentStatement", "consoleStatement", 
                         "block", "expression", "term" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleAnalizadorParser.ruleNames;
        this.literalNames = SimpleAnalizadorParser.literalNames;
        this.symbolicNames = SimpleAnalizadorParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleAnalizadorParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 20;
	            this.statement();
	            this.state = 25;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleAnalizadorParser.RULE_statement);
	    try {
	        this.state = 29;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 26;
	            this.arrayDeclaration();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 27;
	            this.forStatement();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 28;
	            this.consoleStatement();
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



	arrayDeclaration() {
	    let localctx = new ArrayDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleAnalizadorParser.RULE_arrayDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(SimpleAnalizadorParser.T__0);
	        this.state = 32;
	        this.match(SimpleAnalizadorParser.ID);
	        this.state = 33;
	        this.match(SimpleAnalizadorParser.ASSIG);
	        this.state = 34;
	        this.match(SimpleAnalizadorParser.CORIZQ);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 262912) !== 0)) {
	            this.state = 35;
	            this.expressionList();
	        }

	        this.state = 38;
	        this.match(SimpleAnalizadorParser.CORDER);
	        this.state = 39;
	        this.match(SimpleAnalizadorParser.SEMI);
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



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleAnalizadorParser.RULE_expressionList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.expression();
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 42;
	            this.match(SimpleAnalizadorParser.COM);
	            this.state = 43;
	            this.expression();
	            this.state = 48;
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



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleAnalizadorParser.RULE_forStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(SimpleAnalizadorParser.T__1);
	        this.state = 50;
	        this.match(SimpleAnalizadorParser.PARIZQ);
	        this.state = 51;
	        this.assignmentStatement();
	        this.state = 52;
	        this.expression();
	        this.state = 53;
	        this.match(SimpleAnalizadorParser.SEMI);
	        this.state = 54;
	        this.assignmentStatement();
	        this.state = 55;
	        this.match(SimpleAnalizadorParser.PARDER);
	        this.state = 56;
	        this.block();
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



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SimpleAnalizadorParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(SimpleAnalizadorParser.ID);
	        this.state = 59;
	        this.match(SimpleAnalizadorParser.ASSIG);
	        this.state = 60;
	        this.expression();
	        this.state = 61;
	        this.match(SimpleAnalizadorParser.SEMI);
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



	consoleStatement() {
	    let localctx = new ConsoleStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SimpleAnalizadorParser.RULE_consoleStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(SimpleAnalizadorParser.T__2);
	        this.state = 64;
	        this.match(SimpleAnalizadorParser.T__3);
	        this.state = 65;
	        this.match(SimpleAnalizadorParser.T__4);
	        this.state = 66;
	        this.match(SimpleAnalizadorParser.PARIZQ);
	        this.state = 67;
	        this.expression();
	        this.state = 68;
	        this.match(SimpleAnalizadorParser.PARDER);
	        this.state = 69;
	        this.match(SimpleAnalizadorParser.SEMI);
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SimpleAnalizadorParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(SimpleAnalizadorParser.T__5);
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0)) {
	            this.state = 72;
	            this.statement();
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 78;
	        this.match(SimpleAnalizadorParser.T__6);
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SimpleAnalizadorParser.RULE_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.term();
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 15360) !== 0)) {
	            this.state = 81;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 15360) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 82;
	            this.term();
	            this.state = 87;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SimpleAnalizadorParser.RULE_term);
	    try {
	        this.state = 94;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.match(SimpleAnalizadorParser.ID);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 89;
	            this.match(SimpleAnalizadorParser.NUMBER);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 90;
	            this.match(SimpleAnalizadorParser.PARIZQ);
	            this.state = 91;
	            this.expression();
	            this.state = 92;
	            this.match(SimpleAnalizadorParser.PARDER);
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


}

SimpleAnalizadorParser.EOF = antlr4.Token.EOF;
SimpleAnalizadorParser.T__0 = 1;
SimpleAnalizadorParser.T__1 = 2;
SimpleAnalizadorParser.T__2 = 3;
SimpleAnalizadorParser.T__3 = 4;
SimpleAnalizadorParser.T__4 = 5;
SimpleAnalizadorParser.T__5 = 6;
SimpleAnalizadorParser.T__6 = 7;
SimpleAnalizadorParser.ID = 8;
SimpleAnalizadorParser.NUMBER = 9;
SimpleAnalizadorParser.MUL = 10;
SimpleAnalizadorParser.DIV = 11;
SimpleAnalizadorParser.ADD = 12;
SimpleAnalizadorParser.SUB = 13;
SimpleAnalizadorParser.SEMI = 14;
SimpleAnalizadorParser.ASSIG = 15;
SimpleAnalizadorParser.COM = 16;
SimpleAnalizadorParser.PARDER = 17;
SimpleAnalizadorParser.PARIZQ = 18;
SimpleAnalizadorParser.CORDER = 19;
SimpleAnalizadorParser.CORIZQ = 20;
SimpleAnalizadorParser.LETTER = 21;
SimpleAnalizadorParser.DIGIT = 22;
SimpleAnalizadorParser.WS = 23;

SimpleAnalizadorParser.RULE_prog = 0;
SimpleAnalizadorParser.RULE_statement = 1;
SimpleAnalizadorParser.RULE_arrayDeclaration = 2;
SimpleAnalizadorParser.RULE_expressionList = 3;
SimpleAnalizadorParser.RULE_forStatement = 4;
SimpleAnalizadorParser.RULE_assignmentStatement = 5;
SimpleAnalizadorParser.RULE_consoleStatement = 6;
SimpleAnalizadorParser.RULE_block = 7;
SimpleAnalizadorParser.RULE_expression = 8;
SimpleAnalizadorParser.RULE_term = 9;

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
        this.ruleIndex = SimpleAnalizadorParser.RULE_prog;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleAnalizadorVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleAnalizadorParser.RULE_statement;
    }

	arrayDeclaration() {
	    return this.getTypedRuleContext(ArrayDeclarationContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	consoleStatement() {
	    return this.getTypedRuleContext(ConsoleStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleAnalizadorVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleAnalizadorParser.RULE_arrayDeclaration;
    }

	ID() {
	    return this.getToken(SimpleAnalizadorParser.ID, 0);
	};

	ASSIG() {
	    return this.getToken(SimpleAnalizadorParser.ASSIG, 0);
	};

	CORIZQ() {
	    return this.getToken(SimpleAnalizadorParser.CORIZQ, 0);
	};

	CORDER() {
	    return this.getToken(SimpleAnalizadorParser.CORDER, 0);
	};

	SEMI() {
	    return this.getToken(SimpleAnalizadorParser.SEMI, 0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.enterArrayDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.exitArrayDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleAnalizadorVisitor ) {
	        return visitor.visitArrayDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleAnalizadorParser.RULE_expressionList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	COM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleAnalizadorParser.COM);
	    } else {
	        return this.getToken(SimpleAnalizadorParser.COM, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.enterExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.exitExpressionList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleAnalizadorVisitor ) {
	        return visitor.visitExpressionList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleAnalizadorParser.RULE_forStatement;
    }

	PARIZQ() {
	    return this.getToken(SimpleAnalizadorParser.PARIZQ, 0);
	};

	assignmentStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentStatementContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentStatementContext,i);
	    }
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMI() {
	    return this.getToken(SimpleAnalizadorParser.SEMI, 0);
	};

	PARDER() {
	    return this.getToken(SimpleAnalizadorParser.PARDER, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.exitForStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleAnalizadorVisitor ) {
	        return visitor.visitForStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleAnalizadorParser.RULE_assignmentStatement;
    }

	ID() {
	    return this.getToken(SimpleAnalizadorParser.ID, 0);
	};

	ASSIG() {
	    return this.getToken(SimpleAnalizadorParser.ASSIG, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMI() {
	    return this.getToken(SimpleAnalizadorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleAnalizadorVisitor ) {
	        return visitor.visitAssignmentStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConsoleStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleAnalizadorParser.RULE_consoleStatement;
    }

	PARIZQ() {
	    return this.getToken(SimpleAnalizadorParser.PARIZQ, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PARDER() {
	    return this.getToken(SimpleAnalizadorParser.PARDER, 0);
	};

	SEMI() {
	    return this.getToken(SimpleAnalizadorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.enterConsoleStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.exitConsoleStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleAnalizadorVisitor ) {
	        return visitor.visitConsoleStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleAnalizadorParser.RULE_block;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleAnalizadorVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleAnalizadorParser.RULE_expression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	ADD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleAnalizadorParser.ADD);
	    } else {
	        return this.getToken(SimpleAnalizadorParser.ADD, i);
	    }
	};


	SUB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleAnalizadorParser.SUB);
	    } else {
	        return this.getToken(SimpleAnalizadorParser.SUB, i);
	    }
	};


	MUL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleAnalizadorParser.MUL);
	    } else {
	        return this.getToken(SimpleAnalizadorParser.MUL, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleAnalizadorParser.DIV);
	    } else {
	        return this.getToken(SimpleAnalizadorParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleAnalizadorVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleAnalizadorParser.RULE_term;
    }

	ID() {
	    return this.getToken(SimpleAnalizadorParser.ID, 0);
	};

	NUMBER() {
	    return this.getToken(SimpleAnalizadorParser.NUMBER, 0);
	};

	PARIZQ() {
	    return this.getToken(SimpleAnalizadorParser.PARIZQ, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PARDER() {
	    return this.getToken(SimpleAnalizadorParser.PARDER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleAnalizadorListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleAnalizadorVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SimpleAnalizadorParser.ProgContext = ProgContext; 
SimpleAnalizadorParser.StatementContext = StatementContext; 
SimpleAnalizadorParser.ArrayDeclarationContext = ArrayDeclarationContext; 
SimpleAnalizadorParser.ExpressionListContext = ExpressionListContext; 
SimpleAnalizadorParser.ForStatementContext = ForStatementContext; 
SimpleAnalizadorParser.AssignmentStatementContext = AssignmentStatementContext; 
SimpleAnalizadorParser.ConsoleStatementContext = ConsoleStatementContext; 
SimpleAnalizadorParser.BlockContext = BlockContext; 
SimpleAnalizadorParser.ExpressionContext = ExpressionContext; 
SimpleAnalizadorParser.TermContext = TermContext; 
