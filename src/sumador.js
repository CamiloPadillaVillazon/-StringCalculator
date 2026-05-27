
function sumarArreglo(numeros) {
  return numeros.reduce((suma, num) => suma + (parseInt(num) || 0), 0);
}

function obtenerSeparadores(cadena) {
  if (cadena.startsWith("//")) {
    const finDelimitador = cadena.indexOf("]");
    return new RegExp(cadena.substring(4, finDelimitador));
  }
  return /,|-/;
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