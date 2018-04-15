
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom,', function(){

  it('Si la palabra termina en "ar" se le quitan esos caracteres', function(){
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })
  it('Si la palabra inicia con Z se le añade "pe"', function(){
    const translation = platzom("Zorro")
    expect(translation).to.equal("Zorrope")
  })
  it('Si la palabra traducida tiene 10 o amas letras se debe partir a la mitad y unir con un guion en medio', function(){
    const translation = platzom("palindromo")
    expect(translation).to.equal("palin-dromo")
  })
  it('Si la palabra original es un palindromo ninguna regla anterio cuenta y se devuleve la misma palabra intercalando mayusculas y minusculas', function(){
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })


})
