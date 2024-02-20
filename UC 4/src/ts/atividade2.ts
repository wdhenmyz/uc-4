//cadastras os livros da biblioteca
class livros{
    titulo: string;
    autor: string;
    editora: string;
    categoria: string;
    copiasDisponiveis: number;
    constructor(titulo: string, autor: string, editora: string, categoria: string, copiasDisponiveis: number){
        this.autor = autor
        this.categoria = categoria
        this.copiasDisponiveis = copiasDisponiveis
        this.editora = editora
        this.titulo = titulo
    }
}

//cadastrar usuarios da biblioteca
class usuario{
    nome: string;
    endereco: string;
    telefone: string;
    cpf: string;
    historico: Array<string>;
    constructor(nome: string, endereco: string, telefone: string, cpf: string, historico: Array<string>,){
        this.cpf = cpf
        this.endereco = endereco
        this.historico = historico
        this.nome = nome
        this.telefone = telefone
    }   
}

//cadastrar os emprestimos feitos na biblioteca
class emprestimos{
    registro: Array<string>;
    dataEmprestimo: Date;
    dataDevolucao: Date;
    info: usuario;
    livros: livros;
    constructor(registro: Array<string>, dataEmprestimo: Date, dataDevolucao: Date, info: usuario, livros : livros){
        this.dataDevolucao = dataDevolucao
        this.dataEmprestimo = dataEmprestimo
        this.info = info
        this.livros = livros
        this.registro = registro
    }
}

const livros = new livros()
const usuario = new usuario()
const emprestimos = new emprestimos()