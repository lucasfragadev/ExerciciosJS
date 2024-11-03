const fs = require('fs');

for (let i = 1; i <= 100; i++) {
    const num = i.toString().padStart(3, '0');
    const nomeArquivo = `exercicio${num}.js`;

    fs.writeFileSync(nomeArquivo, `// Arquivo ${nomeArquivo}`, 'utf8'); 
}

console.log('Arquivos criados com sucesso!');
