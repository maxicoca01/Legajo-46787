// Generated from c:/Users/maxic/OneDrive/Escritorio/New folder/Legajo-46787/Analizador/SimpleAnalizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SimpleAnalizadorParser}.
 */
public interface SimpleAnalizadorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SimpleAnalizadorParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(SimpleAnalizadorParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleAnalizadorParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(SimpleAnalizadorParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleAnalizadorParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(SimpleAnalizadorParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleAnalizadorParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(SimpleAnalizadorParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleAnalizadorParser#arrayDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterArrayDeclaration(SimpleAnalizadorParser.ArrayDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleAnalizadorParser#arrayDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitArrayDeclaration(SimpleAnalizadorParser.ArrayDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleAnalizadorParser#expressionList}.
	 * @param ctx the parse tree
	 */
	void enterExpressionList(SimpleAnalizadorParser.ExpressionListContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleAnalizadorParser#expressionList}.
	 * @param ctx the parse tree
	 */
	void exitExpressionList(SimpleAnalizadorParser.ExpressionListContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleAnalizadorParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void enterForStatement(SimpleAnalizadorParser.ForStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleAnalizadorParser#forStatement}.
	 * @param ctx the parse tree
	 */
	void exitForStatement(SimpleAnalizadorParser.ForStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleAnalizadorParser#assignmentStatement}.
	 * @param ctx the parse tree
	 */
	void enterAssignmentStatement(SimpleAnalizadorParser.AssignmentStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleAnalizadorParser#assignmentStatement}.
	 * @param ctx the parse tree
	 */
	void exitAssignmentStatement(SimpleAnalizadorParser.AssignmentStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleAnalizadorParser#consoleStatement}.
	 * @param ctx the parse tree
	 */
	void enterConsoleStatement(SimpleAnalizadorParser.ConsoleStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleAnalizadorParser#consoleStatement}.
	 * @param ctx the parse tree
	 */
	void exitConsoleStatement(SimpleAnalizadorParser.ConsoleStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleAnalizadorParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(SimpleAnalizadorParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleAnalizadorParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(SimpleAnalizadorParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleAnalizadorParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(SimpleAnalizadorParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleAnalizadorParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(SimpleAnalizadorParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SimpleAnalizadorParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(SimpleAnalizadorParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link SimpleAnalizadorParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(SimpleAnalizadorParser.TermContext ctx);
}