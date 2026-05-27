// function sumar(a, b) {
//   return a + b;
// }

// export default sumar;

function sumarArreglo(numeros) {
  return numeros.reduce((suma, num) => suma + (parseInt(num) || 0), 0);
}

export function calculadoraCadenas(cadena) {
  if (cadena === "") return 0;

  const separadores = /,|-/; 
  const numeros = cadena.split(separadores);

  return sumarArreglo(numeros);
}