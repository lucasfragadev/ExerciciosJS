// Arquivo exercicio015.js

/* 
function verificacaoPalindromo (palavra) {
  let palavraInvertida = palavra.split('').reverse().join('');
  if (palavra.toLowerCase() == palavraInvertida.toLowerCase()) {
    console.log(`A palavra ${palavra.toLowerCase()} é um palíndromo!`);
  } else {
    console.log(`A palavra ${palavra.toLowerCase()} não é um palíndromo!`);
  }
}

*/

// Sem usar funções agregadoras split, reverse e join

/*

function checkPalindromo (palavra) { // criei a função para verificar se é um palíndromo.
  let palavraMiniscula = palavra.toLowerCase(); // para não ter erro, converto a palavra para caracteres minúsculos.
  let tamanho = palavra.length; // para verificar o tamanho da palavra escolhida; será usado no loop.

  for (let i = 0; i < tamanho / 2; i++) { 

    // O loop for nesse caso irá pecorrer metade do tamanho da palavra
    // Por exemplo, se a palavra for ARARA; a palavra tem 5 letras, logo, iremos ter um tamaho de 5/2 = 2.5
    // Para verificar se é um palíndromo, vou comparar (AR /2.5) A (RA /2.5); mas como "i" é um número inteiro
    // Só iremos percorrer com o for os índices 0 e 1 (2 indíces)
    // Na primeira iteração i = 0, então, teremos palavra[0] !== palavra[5 - 1 - 0] ou seja palavra[4]
    // Nesse caso acima comparamos a letra "A" (primeira letra) com a letra "A" (última letra)
    // Como elas são iguais, o loop continua!
    // Agora, em seguida, temos palavra[1] !== palavra[5 - 1 - 1] ou seja palavra [3]
    // Seriam as letras "R" (segunda letra (índice 1)) e "R" (penúltima letra (indíce 3))
    // O loop termina porque não teremos o incremeto de 2.5 (metade de 5, que é o tamanho da palavra do exemplo)
    
    if (palavraMiniscula[i] !== palavraMiniscula[tamanho - 1 - i]) {
      console.log(`A palavra ${palavra} não é um palíndromo!`)
      return;
    }
  }
  console.log(`A palavra ${palavra} é um palíndromo!`)
}

checkPalindromo("Ovo")
checkPalindromo("Radar")
checkPalindromo("Roma é amor")
checkPalindromo("Socorram me subi no on ibus em Marrocos")

*/