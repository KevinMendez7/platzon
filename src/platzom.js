export default function platzom(str){

  let translation = str

//Si la palabra termina en "ar" se le quitan esos caracteres
  if(str.toLowerCase().endsWith("ar")){

    translation = str.slice(0, -2)
    return translation
  }
//Si la palabra inicia con Z se le añade "pe"
  if(str.toLowerCase().startsWith("z")){

    translation += "pe"
    return translation

  }
//Si la palabra traducida tiene 10 o amas letras se debe partir a la mitad y unir con un guion en medio
  const leng = translation.length
  if(leng>=10){

    const firsHalf = translation.slice(0, Math.round(leng/2))
    const secondHalf = translation.slice(Math.round(leng/2))
    return `${firsHalf}-${secondHalf}`
  }

  function minMay(str){

    const lenght = str.length
    let translation = ''
    let capitalize = true

    for(let i = 0; i<lenght; i++){

      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize

    }

    return translation
  }

    const reverse = (str) => str.split('').reverse().join('')

    //Si la palabra original es un palindromo ninguna regla anterio cuenta y se devuleve la misma palabra intercalando mayusculas y minusculas

      if(str == reverse(str)) {

        return minMay(str)

      }


    return translation



}
