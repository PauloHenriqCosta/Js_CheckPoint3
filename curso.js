const aluno = require('./aluno');


class Curso {
    nome = 'Certified Tech Developer';
    notaMinima = 7;
    faltasMaximo = 2;
    listaMatriculados= []; 

    constructor(lista) {
        // this.listaMatriculados= aluno.listaAlunos;
        this.listaMatriculados= lista;
    }

    adicionarMatriculado(nome, idade, notas) {
        this.listaMatriculados.push({
            nome: nome,
            idade: idade,
            notas: notas,
            media: 0,
            faltas: 0
        });        
    }

    aprovacao(indice) {
        const matriculado = this.listaMatriculados[indice];

        if (matriculado.media >= this.notaMinima && matriculado.faltas < this.faltasMaximo) {
            return 'Aprovado';
        } else if (
            // 1.1= 10% acima da nota de aprovação se estiver no limite de faltas
            matriculado.media >= this.notaMinima * 1.1 && 
            matriculado.faltas === this.faltasMaximo
        ) {
            return 'Aprovado';
        } else {
            return 'Reprovado';
        }

    }

}

const matriculado = new Curso(aluno.listaAlunos);

// Comando para verificar aprovação ou reprovação do aluno
// console.log(matriculado.aprovacao(3));

// Comando para verificar a importação
// console.log(Curso.listaMatriculados);



//   console.log(aluno.listaAlunos[1].media);

console.log('')
console.log("_______________________________________________________________")
console.log('')
console.log("Número da posição no cadastro seguido do nome do discente:")
console.log('')
console.table(['Mustafá', 'Marinalva', 'Gertrudes', 'Felizberto', 'Inocêncio'])
console.log('')

console.log('_______________________________________________________________')
console.log('')

console.log('ARRAYS DOS DISCENTES SEGUIDO DA APROVAÇÃO OU REPROVAÇÃO NO CURSO')
console.log('')
console.log('')

// console.log(matriculado.aprovacao(0));

  console.log(aluno.listaAlunos[0]);
  console.log(matriculado.aprovacao(0));
  console.log('')

  console.log(aluno.listaAlunos[1]);
  console.log(matriculado.aprovacao(1));
  console.log('')

  console.log(aluno.listaAlunos[2]);
  console.log(matriculado.aprovacao(2));
  console.log('')

  console.log(aluno.listaAlunos[3]);
  console.log(matriculado.aprovacao(3));
  console.log('')
  console.log('')

  console.log(aluno.listaAlunos[4]);
  console.log(matriculado.aprovacao(4));
  console.log('')
  console.log('')


  console.log("_____________________________________________________Obrigado pela paciência e atenção, desejo um excelente natal e um próspero ano novo!  ")
  console.log('')
  console.log('')
  console.log('')