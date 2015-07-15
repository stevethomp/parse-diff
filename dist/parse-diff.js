  var defaultToWhiteSpace, escapeRegExp, ltrim, makeString, parseFile, trimLeft;
    s = ltrim(s, '-');
    s = ltrim(s, '+');
  ltrim = function(s, chars) {
    s = makeString(s);
    if (!chars && trimLeft) {
      return trimLeft.call(s);
    }
    chars = defaultToWhiteSpace(chars);
    return s.replace(new RegExp('^' + chars + '+'), '');
  };

  makeString = function(s) {
    if (s === null) {
      return '';
    } else {
      return s + '';
    }
  };

  trimLeft = String.prototype.trimLeft;

  defaultToWhiteSpace = function(chars) {
    if (chars === null) {
      return '\\s';
    }
    if (chars.source) {
      return chars.source;
    }
    return '[' + escapeRegExp(chars) + ']';
  };

  escapeRegExp = function(s) {
    return makeString(s).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  };
