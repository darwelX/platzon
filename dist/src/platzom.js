'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var traslations = str;

  if (str.toLowerCase().endsWith('ar')) {
    traslations = str.slice(0, -2);
  }

  if (str.toLowerCase().startsWith('z')) {
    traslations += 'pe';
  }

  var length = traslations.length;
  if (length >= 10) {
    var primera = traslations.slice(0, Math.round(length / 2));
    var segunda = traslations.slice(Math.round(length / 2));
    traslations = primera + '-' + segunda;
  }

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  function minMay(str) {
    var arrayStr = str.split('');
    for (var i = 0; i < arrayStr.length; i++) {
      arrayStr[i] = (i + 1) % 2 == 1 ? arrayStr[i].toUpperCase() : arrayStr[i].toLowerCase();
    }
    return arrayStr.join('');
  }

  if (str == reverse(str)) {
    return minMay(str);
  }
  return traslations;
}