"use strict";
//cadastras os livros da biblioteca
class livros {
    titulo;
    autor;
    editora;
    categoria;
    copiasDisponiveis;
    constructor(titulo, autor, editora, categoria, copiasDisponiveis) {
        this.autor = autor;
        this.categoria = categoria;
        this.copiasDisponiveis = copiasDisponiveis;
        this.editora = editora;
        this.titulo = titulo;
    }
}
//cadastrar usuarios da biblioteca
class usuario {
    nome;
    endereco;
    telefone;
    cpf;
    historico;
    constructor(nome, endereco, telefone, cpf, historico) {
        this.cpf = cpf;
        this.endereco = endereco;
        this.historico = historico;
        this.nome = nome;
        this.telefone = telefone;
    }
}
//cadastrar os emprestimos feitos na biblioteca
class emprestimos {
    registro;
    dataEmprestimo;
    dataDevolucao;
    info;
    livros;
    constructor(registro, dataEmprestimo, dataDevolucao, info, livros) {
        this.dataDevolucao = dataDevolucao;
        this.dataEmprestimo = dataEmprestimo;
        this.info = info;
        this.livros = livros;
        this.registro = registro;
    }
}
const livro1 = new livros('orion', 'eren', 'casa', 'aventura', 23);
console.log(livro1);
//const usuario = new usuario()
//const emprestimos = new emprestimos()
