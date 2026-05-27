// function sumar(a, b) {
//   return a + b;
// }

// export default sumar;

function sumarArreglo(numeros) {
  return numeros.reduce((suma, num) => suma + (parseInt(num) || 0), 0);
}

export function calculadoraCadenas(cadena) {
  if (cadena === "") return 0;

  if (cadena.includes(",")) {
    const numeros = cadena.split(",");
    return sumarArreglo(numeros);
  }
  return parseInt(cadena);
}