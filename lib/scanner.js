// Generated by CoffeeScript 1.3.3
(function() {
  var Scanner;

  window.Scanner = Scanner = (function() {

    function Scanner(inputReader, scannerWordsAnalyser) {
      this.inputReader = inputReader;
      this.scannerWordsAnalyser = scannerWordsAnalyser;
      this.currentToken = null;
    }

    Scanner.prototype.currentToken = function() {
      return this.currentToken;
    };

    Scanner.prototype.nextToken = function() {
      this.currentToken = this._extractToken();
      return this.currentToken;
    };

    Scanner.prototype._extractToken = function() {
      var currentChar, token;
      this._skipWhitespaces();
      currentChar = this.inputReader.currentChar();
      token = null;
      if (CharChecker.isNumber(currentChar)) {
        token = new Token(this.inputReader, 'number', CharChecker.isNumber);
        token.value = parseInt(token.value);
      } else if (CharChecker.isAlpha(currentChar)) {
        token = new Token(this.inputReader, 'word', CharChecker.isAlpha);
        scannerWordsAnalyser.timeModifierCheck(token);
        scannerWordsAnalyser.wordNumberCheck(token);
      } else if (CharChecker.isColon(currentChar)) {
        token = new Token(this.inputReader, 'colon');
      } else if (currentChar === void 0) {
        token = new Token(this.inputReader, 'end');
      } else {
        token = new Token(this.inputReader, 'undef');
      }
      return token;
    };

    Scanner.prototype._skipWhitespaces = function() {
      var _results;
      _results = [];
      while (this.inputReader.currentChar() === ' ') {
        _results.push(this.inputReader.nextChar());
      }
      return _results;
    };

    return Scanner;

  })();

}).call(this);