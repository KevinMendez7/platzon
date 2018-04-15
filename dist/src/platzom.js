"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {

  var translation = str;

  //Si la palabra termina en "ar" se le quitan esos caracteres
  if (str.toLowerCase().endsWith("ar")) {

    translation = str.slice(0, -2);
    return translation;
  }
  //Si la palabra inicia con Z se le añade "pe"
  if (str.toLowerCase().startsWith("z")) {

    translation += "pe";
    return translation;
  }
  //Si la palabra traducida tiene 10 o amas letras se debe partir a la mitad y unir con un guion en medio
  var leng = translation.length;
  if (leng >= 10) {

    var firsHalf = translation.slice(0, Math.round(leng / 2));
    var secondHalf = translation.slice(Math.round(leng / 2));
    return firsHalf + "-" + secondHalf;
  }

  function minMay(str) {

    var lenght = str.length;
    var translation = '';
    var capitalize = true;

    for (var i = 0; i < lenght; i++) {

      var char = str.charAt(i);
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }

    return translation;
  }

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  //Si la palabra original es un palindromo ninguna regla anterio cuenta y se devuleve la misma palabra intercalando mayusculas y minusculas

  if (str == reverse(str)) {

    return minMay(str);
  }

  return translation;
}