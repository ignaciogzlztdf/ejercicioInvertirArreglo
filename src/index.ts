import "./styles.css";

// Definición de variables, Ingreso de datos

let dimensionArreglo: number = Number(
  prompt("Ingrese la dimensión de su arreglo.")
);
let arreglo: number[] = new Array(dimensionArreglo);
let arregloInvertido: number[] = new Array(dimensionArreglo);

// Defino funciones para cada acción (almacenar, invertir)

function almacenarNúmerosEnArreglo(): number[] {
  for (
    let indiceArreglo = 0;
    indiceArreglo < dimensionArreglo;
    indiceArreglo++
  ) {
    arreglo[indiceArreglo] = Number(
      prompt(
        "Ingrese el número que se ubicará en la posición " +
          indiceArreglo +
          ". Recuerde que recibirá sus números en el orden invertido."
      )
    );
  }
  return arreglo;
}
function invertirArreglo(): number[] {
  for (
    let indiceArregloInvertido = 0;
    indiceArregloInvertido < arreglo.length;
    indiceArregloInvertido++
  ) {
    arregloInvertido[indiceArregloInvertido] =
      arreglo[arreglo.length - 1 - indiceArregloInvertido];
  }
  return arregloInvertido;
}

// Muestro por consola el arreglo ingresado y su versión invertida, Llamo a las funciones

console.log("Entrada:", almacenarNúmerosEnArreglo());
console.log("Salida:", invertirArreglo());
