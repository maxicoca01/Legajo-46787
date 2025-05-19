grammar SimpleAnalizador;
//gramatica
prog: statement*;

statement: arrayDeclaration | forStatement | consoleStatement;
//Se declara un arreglo
arrayDeclaration: 'let' ID '=' '[' expressionList? ']' ';';

expressionList: expression (',' expression)*;
//Se declara un for
forStatement:
	'for' '(' assignmentStatement expression ';' assignmentStatement ')' block;
assignmentStatement: ID '=' expression ';';
consoleStatement: 'console' '.' 'log' '(' expression ')' ';';
block: '{' statement* '}';
expression: term (('+' | '-' | '*' | '/') term)*;
term: ID | NUMBER | '(' expression ')';

// Tokens
ID: LETTER (LETTER | DIGIT | '_')*;
NUMBER: DIGIT+;
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
SEMI: ';';
ASSIG: '=';
COM: ',';
PARDER: ')';
PARIZQ: '(';
CORDER: ']';
CORIZQ: '[';
LETTER: [a-zA-Z][a-zA-Z0-9_]*;
DIGIT: [0-9];
WS: [ \t\r\n]+ -> skip;