// Arquivo exercicio010.js

/* 

const quantidadeAlunos = parseInt(prompt("Digite a quantidade de alunos: "));
const mediaAlunos = []

function mediaAluno () {
  for (let i = 0; i < quantidadeAlunos; i++) {
    const aluno = prompt(`Qual o nome do ${i+1} aluno? `);
    const notas = [];

    for (let j = 0; j < 3; j++) {
      const nota = parseFloat(prompt(`Informe a ${j+1} nota de ${aluno}: `));
      notas.push(nota);
    }

    const mediaNotas = notas.reduce((acc, valor) => acc + valor, 0) / 3;
    mediaAlunos.push(mediaNotas);

    const status = mediaNotas >= 7 ? "Aprovado" : "Reprovado";
    console.log(`O aluno ${aluno} obteve as notas ${notas.join(", ")} e uma média de ${mediaNotas.toFixed(2)} e está ${status}`);
  }
  
  const mediaGeral = mediaAlunos.reduce((acc, valor) => acc + valor, 0) / quantidadeAlunos;
  console.log('--------------------')
  console.log(`\nA média geral da turma é de ${mediaGeral.toFixed(2)}`)

}

mediaAluno();

*/