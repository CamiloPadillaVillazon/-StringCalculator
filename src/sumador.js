
function sumarArreglo(numeros) {
  return numeros.reduce((suma, num) => suma + (parseInt(num) || 0), 0);
}

function obtenerSeparadores(cadena) {
  let expresion = ",|-"; // Mantenemos los de por defecto
  if (cadena.startsWith("//")) {
    const finDelimitador = cadena.indexOf("]");
    const delimitador = cadena.substring(4, finDelimitador);
    expresion += "|" + delimitador; // Agregamos el personalizado
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