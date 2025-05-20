// Generated from c:/Users/maxic/OneDrive/Escritorio/New folder/Legajo-46787/Analizador/SimpleAnalizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class SimpleAnalizadorLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, ID=8, NUMBER=9, 
		MUL=10, DIV=11, ADD=12, SUB=13, SEMI=14, ASSIG=15, COM=16, PARDER=17, 
		PARIZQ=18, CORDER=19, CORIZQ=20, LETTER=21, DIGIT=22, WS=23;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "ID", "NUMBER", 
			"MUL", "DIV", "ADD", "SUB", "SEMI", "ASSIG", "COM", "PARDER", "PARIZQ", 
			"CORDER", "CORIZQ", "LETTER", "DIGIT", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'let'", "'for'", "'console'", "'.'", "'log'", "'{'", "'}'", null, 
			null, "'*'", "'/'", "'+'", "'-'", "';'", "'='", "','", "')'", "'('", 
			"']'", "'['"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, "ID", "NUMBER", "MUL", 
			"DIV", "ADD", "SUB", "SEMI", "ASSIG", "COM", "PARDER", "PARIZQ", "CORDER", 
			"CORIZQ", "LETTER", "DIGIT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public SimpleAnalizadorLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "SimpleAnalizador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0017}\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002"+
		"\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007N\b\u0007\n\u0007"+
		"\f\u0007Q\t\u0007\u0001\b\u0004\bT\b\b\u000b\b\f\bU\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001"+
		"\u0014\u0001\u0014\u0005\u0014p\b\u0014\n\u0014\f\u0014s\t\u0014\u0001"+
		"\u0015\u0001\u0015\u0001\u0016\u0004\u0016x\b\u0016\u000b\u0016\f\u0016"+
		"y\u0001\u0016\u0001\u0016\u0000\u0000\u0017\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011"+
		"#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017\u0001\u0000\u0004\u0002\u0000"+
		"AZaz\u0004\u000009AZ__az\u0001\u000009\u0003\u0000\t\n\r\r  \u0082\u0000"+
		"\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000"+
		"\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000"+
		"\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r"+
		"\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000"+
		"\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000"+
		"\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001\u0000\u0000\u0000\u0001/"+
		"\u0001\u0000\u0000\u0000\u00033\u0001\u0000\u0000\u0000\u00057\u0001\u0000"+
		"\u0000\u0000\u0007?\u0001\u0000\u0000\u0000\tA\u0001\u0000\u0000\u0000"+
		"\u000bE\u0001\u0000\u0000\u0000\rG\u0001\u0000\u0000\u0000\u000fI\u0001"+
		"\u0000\u0000\u0000\u0011S\u0001\u0000\u0000\u0000\u0013W\u0001\u0000\u0000"+
		"\u0000\u0015Y\u0001\u0000\u0000\u0000\u0017[\u0001\u0000\u0000\u0000\u0019"+
		"]\u0001\u0000\u0000\u0000\u001b_\u0001\u0000\u0000\u0000\u001da\u0001"+
		"\u0000\u0000\u0000\u001fc\u0001\u0000\u0000\u0000!e\u0001\u0000\u0000"+
		"\u0000#g\u0001\u0000\u0000\u0000%i\u0001\u0000\u0000\u0000\'k\u0001\u0000"+
		"\u0000\u0000)m\u0001\u0000\u0000\u0000+t\u0001\u0000\u0000\u0000-w\u0001"+
		"\u0000\u0000\u0000/0\u0005l\u0000\u000001\u0005e\u0000\u000012\u0005t"+
		"\u0000\u00002\u0002\u0001\u0000\u0000\u000034\u0005f\u0000\u000045\u0005"+
		"o\u0000\u000056\u0005r\u0000\u00006\u0004\u0001\u0000\u0000\u000078\u0005"+
		"c\u0000\u000089\u0005o\u0000\u00009:\u0005n\u0000\u0000:;\u0005s\u0000"+
		"\u0000;<\u0005o\u0000\u0000<=\u0005l\u0000\u0000=>\u0005e\u0000\u0000"+
		">\u0006\u0001\u0000\u0000\u0000?@\u0005.\u0000\u0000@\b\u0001\u0000\u0000"+
		"\u0000AB\u0005l\u0000\u0000BC\u0005o\u0000\u0000CD\u0005g\u0000\u0000"+
		"D\n\u0001\u0000\u0000\u0000EF\u0005{\u0000\u0000F\f\u0001\u0000\u0000"+
		"\u0000GH\u0005}\u0000\u0000H\u000e\u0001\u0000\u0000\u0000IO\u0003)\u0014"+
		"\u0000JN\u0003)\u0014\u0000KN\u0003+\u0015\u0000LN\u0005_\u0000\u0000"+
		"MJ\u0001\u0000\u0000\u0000MK\u0001\u0000\u0000\u0000ML\u0001\u0000\u0000"+
		"\u0000NQ\u0001\u0000\u0000\u0000OM\u0001\u0000\u0000\u0000OP\u0001\u0000"+
		"\u0000\u0000P\u0010\u0001\u0000\u0000\u0000QO\u0001\u0000\u0000\u0000"+
		"RT\u0003+\u0015\u0000SR\u0001\u0000\u0000\u0000TU\u0001\u0000\u0000\u0000"+
		"US\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000\u0000V\u0012\u0001\u0000"+
		"\u0000\u0000WX\u0005*\u0000\u0000X\u0014\u0001\u0000\u0000\u0000YZ\u0005"+
		"/\u0000\u0000Z\u0016\u0001\u0000\u0000\u0000[\\\u0005+\u0000\u0000\\\u0018"+
		"\u0001\u0000\u0000\u0000]^\u0005-\u0000\u0000^\u001a\u0001\u0000\u0000"+
		"\u0000_`\u0005;\u0000\u0000`\u001c\u0001\u0000\u0000\u0000ab\u0005=\u0000"+
		"\u0000b\u001e\u0001\u0000\u0000\u0000cd\u0005,\u0000\u0000d \u0001\u0000"+
		"\u0000\u0000ef\u0005)\u0000\u0000f\"\u0001\u0000\u0000\u0000gh\u0005("+
		"\u0000\u0000h$\u0001\u0000\u0000\u0000ij\u0005]\u0000\u0000j&\u0001\u0000"+
		"\u0000\u0000kl\u0005[\u0000\u0000l(\u0001\u0000\u0000\u0000mq\u0007\u0000"+
		"\u0000\u0000np\u0007\u0001\u0000\u0000on\u0001\u0000\u0000\u0000ps\u0001"+
		"\u0000\u0000\u0000qo\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000\u0000"+
		"r*\u0001\u0000\u0000\u0000sq\u0001\u0000\u0000\u0000tu\u0007\u0002\u0000"+
		"\u0000u,\u0001\u0000\u0000\u0000vx\u0007\u0003\u0000\u0000wv\u0001\u0000"+
		"\u0000\u0000xy\u0001\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000yz\u0001"+
		"\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000{|\u0006\u0016\u0000\u0000"+
		"|.\u0001\u0000\u0000\u0000\u0006\u0000MOUqy\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}