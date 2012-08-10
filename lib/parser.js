// Generated by CoffeeScript 1.3.3
(function() {
  var Parser;

  window.Parser = Parser = (function() {

    function Parser(scanner) {
      this.scanner = scanner;
    }

    Parser.prototype.parse = function() {
      var token, tokens;
      tokens = [];
      while ((token = this.scanner.nextToken()).token !== 'end') {
        tokens.push(token);
      }
      return tokens;
    };

    return Parser;

  })();

}).call(this);