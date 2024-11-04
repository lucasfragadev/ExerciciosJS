// Arquivo exercicio016.js

/*

function maiorNumeroFunction (n1, n2, n3) {
  const numeros = [n1, n2, n3]
  let maiorNumero = -Infinity

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i]
    }
  }
  console.log(`O maior número da lista é ${maiorNumero}`);
}

maiorNumeroFunction(1, 2, 3);
maiorNumeroFunction(5, 3, 4);
maiorNumeroFunction(7, 8, 7);
maiorNumeroFunction(23, 5, 90);

*/ 

// Outra forma de fazer essa questão

/*

function maiorNumeroFunctionDois (...numeros) { // ...numeros aceita qualquer quantidade de argumentos, nesse caso números;
  console.log(`O maior número encontrado é ${Math.max(...numeros)}`); // Math.max calcula dentre os argumentos acima o maior número;
}
maiorNumeroFunctionDois(22, 42, 992, 934, 187, 277, 3902)

*/