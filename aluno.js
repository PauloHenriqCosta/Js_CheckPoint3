class Aluno {
    // Declarando tipo de conteúdo das variáveis.
    listaAlunos = [];
    nome = "";
    faltas = 0;
    notas = 0;
    media = 0;
  
    // Criação do construtor para garantir que poderão ser utilizado em mais de um método (pensando em escalabilidade do código).
    constructor(nome, faltas, notas) {
      this.nome = nome;
      this.faltas = faltas;
      this.notas = notas;
    }
  
    // Método para adicionar alunos na lista de alunos.
    adicionarAluno(nome, faltas, notas) {
      this.listaAlunos.push({
        nome: nome,
        faltas: faltas,
        notas: notas,
        media: 0,
        faltas: 0,
      });
    }
  
    // Método para calcular a média dos alunos (forEach para percorrer todos os alunos).
    calcularMedia() {
      let total;
  
      this.listaAlunos.forEach((aluno) => {
        total = 0;
  
        aluno.notas.forEach((notas) => {
          total += notas;
        });
  
        // Assim não rodava (agora roda) 
        aluno.media = total / aluno.notas.length;
  
        // Assim sempre rodou
        // console.log(
        //   `Oi ${aluno.nome}, a sua média é ${total / aluno.notas.length}`
        
      });
    }
  
    aumentarFaltas(indice) {
      this.listaAlunos[indice].faltas++;
    }
  }
  
  // Instanciando aluno para facilitar o uso de métodos.
  const aluno = new Aluno();
  
//   // LISTA DE ALUNOS 
  aluno.adicionarAluno("Mustafá", 0, [9, 8, 10]);
  aluno.adicionarAluno("Marinalva", 0, [9, 9, 9]);
  aluno.adicionarAluno("Gertrudes", 0, [7, 8, 9]);
  aluno.adicionarAluno("Felizberto", 0, [3, 5, 0]);
  aluno.adicionarAluno("Inocêncio", 0, [8, 8, 10]);
  
  aluno.calcularMedia();
  
//   // Comando para testar a média dos alunos
  // console.log(aluno.listaAlunos[1].media);

//   // Comando para mostrar as médias de todos os alunos.
//   // aluno.calcularMedia();
  


//   // console.log(aluno.listaAlunos[0]);

//   // Computando as faltas dos alunos_______________________________________________________________

  // Faltas do Mustafá    
  aluno.aumentarFaltas(0);
  aluno.aumentarFaltas(0);

  
  // Faltas da Marinalva
  aluno.aumentarFaltas(1);
  aluno.aumentarFaltas(1);

  // Faltas da Gertrudes
  aluno.aumentarFaltas(2);
  aluno.aumentarFaltas(2);
 
  

  // Faltas do Felizberto
  aluno.aumentarFaltas(3);


  // Faltas do Inocêncio
  aluno.aumentarFaltas(4);
  aluno.aumentarFaltas(4);
  aluno.aumentarFaltas(4);
  aluno.aumentarFaltas(4);
  aluno.aumentarFaltas(4);
  aluno.aumentarFaltas(4);
  aluno.aumentarFaltas(4);
  

// // Fim da computação das faltas dos alunos_____________________________________________________________
  
  
  
  
  // console.log(aluno.listaAlunos[1]);
  

//   // Comando para verificar a lista de alunos.________
//   // console.log(aluno.listaAlunos);
  
  module.exports = aluno;
  

  // console.log(aluno.listaAlunos[1].media);
