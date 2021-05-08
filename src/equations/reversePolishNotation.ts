import { CompositionType, TokenType } from './tokenEnums';
import { OperatorToken, RpnToken, SyntaxToken, Token } from './tokenTypes';
import { isValue } from './tokenUtils';

export default function getRPN(tokens: Token[]): RpnToken[] {
  // calculate reverse polish notation based on Shunting-yard algorithm
  try {
    const outputQueue: Token[] = [];
    const syntaxStack: SyntaxToken[] = [];

    tokens.forEach((token) => {
      if (isValue(token)) {
        outputQueue.push(token);
      } else if (token.type === TokenType.Function) {
        syntaxStack.push(token);
      } else if (token.type === TokenType.Operator) {
        queueOperator(token, syntaxStack, outputQueue);
      } else if (token.type === TokenType.Composition) {
        if (token.name === CompositionType.LeftParenthesis) {
          syntaxStack.push(token);
        } else if (token.name === CompositionType.RightParenthesis) {
          queueRightParenthesis(syntaxStack, outputQueue);
        }
      }
    });

    return filterTokens([...syntaxStack, ...outputQueue.reverse()]);
  } catch (error) {
    return [];
  }
}

function queueOperator(
  token: OperatorToken,
  syntaxStack: SyntaxToken[],
  outputQueue: Token[],
): void {
  // move tokens from syntaxStack -> outputQueue, as long as
  //  -> top token is not a left parenthesis
  //  -> top token has greater precedence (or equal and token has left asso)
  while (syntaxStack.length > 0) {
    const topSyntax = syntaxStack[syntaxStack.length - 1];
    if (
      topSyntax.type === TokenType.Composition &&
      topSyntax.name === CompositionType.LeftParenthesis
    )
      break;
    else if (topSyntax.type === TokenType.Operator) {
      if (topSyntax.precedence < token.precedence) break;
      if (topSyntax.precedence === token.precedence && token.associativity === 'right') break;
    }
    syntaxStack.pop();
    outputQueue.push(topSyntax);
  }
  // add token to operatorQueue
  syntaxStack.push(token);
}

function queueRightParenthesis(syntaxStack: SyntaxToken[], outputQueue: Token[]): void {
  // move tokens from syntaxStack -> outputQueue, until left parenthesis appears
  // the left parenthesis is removed
  while (syntaxStack.length > 0) {
    const topSyntax = syntaxStack[syntaxStack.length - 1];
    syntaxStack.pop();
    if (
      topSyntax.type === TokenType.Composition &&
      topSyntax.name === CompositionType.LeftParenthesis
    )
      break;
    outputQueue.push(topSyntax);
  }
  // if now a function token is on top, move it to outputQueue
  const topSyntax = syntaxStack[syntaxStack.length - 1];
  if (topSyntax.type === TokenType.Function) {
    syntaxStack.pop();
    outputQueue.push(topSyntax);
  }
}

function filterTokens(tokens: Token[]): RpnToken[] {
  const rpnTokens: RpnToken[] = [];
  tokens.forEach((token) => {
    if (
      token.type === TokenType.Operator ||
      token.type === TokenType.Function ||
      token.type === TokenType.Variable ||
      token.type === TokenType.Array ||
      token.type === TokenType.Number ||
      token.type === TokenType.CellRange
    ) {
      rpnTokens.push(token);
    }
  });
  return rpnTokens;
}
