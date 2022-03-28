let valoresPares = 0;
let valoresImpares = 0;
let valoresPositivos = 0;
let valoresNegativos = 0;

for (var i = 0; i < 5; i++) {
  const valorInformadoPeloUsuario = 2;

  // TODO: Complete os espaços em branco com uma solução possível para o problema.
  if (valorInformadoPeloUsuario % 2 == 0 ) {
    valoresPares++;
  } else {
    valoresImpares++;
  }

  if (valorInformadoPeloUsuario > 0) {
    valoresPositivos++;
  } else if (valorInformadoPeloUsuario < 0) {
    valoresNegativos++
  }

}

console.log(valoresPares, ' par(es)')
console.log(valoresImpares, ' Impar(es)')
console.log(valoresPositivos, ' Positivo(s)')
console.log(valoresNegativos, ' Negativos(s)')