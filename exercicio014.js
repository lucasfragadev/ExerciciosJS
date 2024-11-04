// Arquivo exercicio014.js

function verificacaoAnoBissexto (ano)  {
  if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
    console.log(`${ano} é um ano bissexto`)
  } else {
    console.log(`${ano} não é um ano bissexto`)
  }
}

verificacaoAnoBissexto(2000)