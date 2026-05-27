
function sumarArreglo(numeros) {
  return numeros.reduce((suma, num) => {
    const valor = parseInt(num) || 0;
    return valor > 1000 ? suma : suma + valor;
  }, 0);
}

function escaparRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
} 

function obtenerSeparadores(cadena) {
  let expresion = ",|-"; 
  if (cadena.startsWith("//")) {
    const finDelimitador = cadena.indexOf("]");
    const delimitador = cadena.substring(3, finDelimitador); 
    expresion += "|" + escaparRegExp(delimitador);
  }
  return new RegExp(expresion);
}

function obtenerTextoNumeros(cadena) {
  if (cadena.startsWith("//")) {
    const finDelimitador = cadena.indexOf("]");
    return cadena.substring(finDelimitador + 2);
  }
  return cadena;
}


export function calculadoraCadenas(cadena) {
  if (cadena === "") return 0;

  const separadores = obtenerSeparadores(cadena);
  const textoLimpio = obtenerTextoNumeros(cadena);
  const numeros = textoLimpio.split(separadores);


  return sumarArreglo(numeros);
}