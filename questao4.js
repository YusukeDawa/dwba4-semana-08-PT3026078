// Questao_04.js

// Classe Aluno
class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }

    // Método para calcular a média
    calcularMedia() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }

    // Método para verificar a situação do aluno
    verificarSituacao() {
        const media = this.calcularMedia();
        return media > 6 ? 'Aprovado' : 'Reprovado';
    }

    // Método para obter o nome completo
    obterNomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }
}

// Array com 5 objetos Aluno
const alunos = [
    new Aluno('Kleber', 'Polanic', 9.5, 8),
        new Aluno('Heitor', 'Brandao', 5, 2),
        new Aluno('Beatriz', 'Turbiani', 8, 7),
        new Aluno('Gustavo', 'Kuslevicius', 6, 9),
        new Aluno('Luciana', 'Games', 4, 9)
];

// Função para mostrar os dados dos alunos
function mostrarDadosAlunos() {
    for (const aluno of alunos) {
        console.log(`Aluno: ${aluno.obterNomeCompleto()}`);
        console.log(`Média: ${aluno.calcularMedia().toFixed(2)}`);
        console.log(`Situação: ${aluno.verificarSituacao()}`);
        console.log('---');
    }
}

// Chama a função para mostrar os dados dos alunos
mostrarDadosAlunos();
