// Arquivo exercicio020.js

/*

const quantidadeAlunos = parseInt(prompt("Quantos alunos estão participando? "));
const mediaAlunos = [];

function classificacaoAlunos () {
  for (i = 0; i < quantidadeAlunos; i++) {
    const aluno = prompt(`Qual o nome do ${i+1}º aluno? `).toUpperCase();
    const notas = [];

    for (let j = 0; j < 3; j++) {
      const nota = parseFloat(prompt(`Informe a ${j+1}ª nota de ${aluno}: `));
      notas.push(nota);
    }

    const mediaNotas = notas.reduce((acc, valor) => acc + valor, 0) / 3;
    mediaAlunos.push({ nome: aluno, media: mediaNotas});
  }

  mediaAlunos.sort((a, b) => b.media - a.media);

  console.log("Classificação dos alunos por média:");
  mediaAlunos.forEach((aluno, index) => {
    console.log(`${index + 1}º lugar: ${aluno.nome} - Média: ${aluno.media.toFixed(2)}`);
  });
}

classificacaoAlunos();

*/

// Eu entendi diferente. Refazendo questão como solicitado.

/*

function classificarAlunos (nota) {
  if (nota >= 90 ) {
    console .log("Excelente");
    } else if (nota >= 80 ) {
    console .log("Ótimo");
    } else if (nota >= 70 ) {
    console .log("Bom");
    } else if (nota >= 60 ) {
    console .log("Ruim");
    } else {
      console .log("Péssimo");
  }
}

classificarAlunos(100)
classificarAlunos(80)
classificarAlunos(70)
classificarAlunos(60)
classificarAlunos(50)

*/


// Refazendo o primeiro código sem usar o "sort" // Usando o algoritmo "bubble sort"

// Fica igual.
const quantidadeAlunos = parseInt(prompt("Quantos alunos estão participando? "));
const mediaAlunos = [];
// Fica igual
function classificacaoAlunos() {
  for (let i = 0; i < quantidadeAlunos; i++) {
    const aluno = prompt(`Qual o nome do ${i + 1}º aluno? `);
    const notas = [];

    for (let j = 0; j < 3; j++) {
      const nota = parseFloat(prompt(`Informe a ${j + 1}ª nota de ${aluno}: `));
      notas.push(nota);
    }

    const mediaNotas = notas.reduce((acc, valor) => acc + valor, 0) / notas.length;
    mediaAlunos.push({ nome: aluno, media: mediaNotas });
  }

  // Algoritmo "Bubble Sort"
  for (let i = 0; i < mediaAlunos.length - 1; i++) { // Laço externo: o loop for é utilizado, nesse caso para iterar do index 0 até o index do tamanho do array; Pecorre o array várias vezes; Ele garante que pelo menos um dos elementos (maior) se descolque para o inicio do array;
    for (let j = 0; j < mediaAlunos.length - 1 - i; j++) { // Laço interno: aqui, o loop for vai iterar de j = 0, index 0, até o número adjacente; 
      if (mediaAlunos[j].media < mediaAlunos[j + 1].media) { // Explicar
        const temp = mediaAlunos[j]; // Explicar
        mediaAlunos[j] = mediaAlunos[j + 1]; // Explicar
        mediaAlunos[j + 1] = temp; // Explicar
      }
    }
  }

  // Fica igual
  console.log("Classificação dos alunos por média:");
  mediaAlunos.forEach((aluno, index) => {
    console.log(`${index + 1}º lugar: ${aluno.nome} - Média: ${aluno.media.toFixed(2)}`);
  });
}

classificacaoAlunos();