
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
    const ultimoCierre = cadena.lastIndexOf("]");
    const bloqueDelimitadores = cadena.substring(2, ultimoCierre + 1); // Extrae todo el bloque "[*][%]"
    
    const regexCorchetes = /\[(.*?)\]/g;
    let match;
    while ((match = regexCorchetes.exec(bloqueDelimitadores)) !== null) {
      expresion += "|" + escaparRegExp(match[1]); // match[1] es el texto exacto sin corchetes
    }
  }
  
  return new RegExp(expresion);
}

function obtenerTextoNumeros(cadena) {
  if (cadena.startsWith("//")) {
    const ultimoCierre = cadena.lastIndexOf("]");
    return cadena.substring(ultimoCierre + 2); 
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